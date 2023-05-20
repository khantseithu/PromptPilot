import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/google";

console.log({
  clientId: process.env.GOOGLE_ID as string,
  clientSecret: process.env.GOOGLE_SECRET as string,
});

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser?._id.toString();
      return session;
    },
    // sign in with google
    async signIn({ user, account, profile }: any) {
      try {
        // connect to database
        await connectToDB();
        // check if user exists in database
        const userExists = await User.findOne({ email: user.email });

        // if not, create user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exist: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
