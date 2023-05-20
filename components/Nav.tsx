"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isAunthenticated = true;
  const [toggleDropDown, setToggleDropDown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-3">
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
        {isAunthenticated ? (
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
        ) : (
          <button
            className="outline_btn"
            type="button"
            onClick={() => console.log("Sign In")}
          >
            Sign In{" "}
          </button>
        )}
      </div>

      {/*  Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isAunthenticated ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => setToggleDropDown(!toggleDropDown)}
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="outline_btn"
            type="button"
            onClick={() => console.log("Sign In")}
          >
            Sign In{" "}
          </button>
        )}
      </div>
    </nav>
  );
};
export default Nav;
