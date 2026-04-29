"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <div>
      <Link href={href} className={`${isActive? 'border-b-3 border-orange-500 text-orange-500':''}`}>{children}</Link>
    </div>
  );
};

export default NavLink;