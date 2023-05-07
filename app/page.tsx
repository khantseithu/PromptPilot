import Feed from "@/components/Feed";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-powered prompts</span>
      </h1>
      <p className="desc text-center">
        Find and share the best prompts for ChatGPT with PromptPilot. Join our
        community of conversational AI enthusiasts and spark engaging and
        creative discussions with one of the most powerful language models in
        the world.
      </p>

      <Feed />
    </section>
  );
};
export default HomePage;
