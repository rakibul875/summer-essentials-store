"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();
  const handelSgnOut= async()=>{
    await authClient.signOut();
    router.push('/')
  }


  const links = (
    <>
      <li className="font-semibold text-lg">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink href={"/product"}>Product</NavLink>
      </li>
      <li className="font-semibold text-lg">
        <NavLink href={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost text-orange-500 font-bold text-2xl"
          >
            SOLSTICE
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="navbar-end gap-2">
            {user ? (
              <div className="flex gap-3">
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <button onClick={handelSgnOut} className="btn bg-orange-500 text-white">Logout</button>
              </div>
            ) : (
              <div className="flex gap-1 lg:gap-3">
                <Link
                  href="/login"
                  className="btn border border-orange-500 text-orange-500"
                >
                  Login
                </Link>
                <Link href="/sineUp" className="btn bg-orange-500 text-white">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
