"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt Pilot</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Prompt
          </Link>

          <button
            type="button"
            onClick={() => alert("signout")}
            className="outline-btn"
          >
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={30}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
