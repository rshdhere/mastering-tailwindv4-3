"use client";
import React, { useState } from "react";
import Hamburger from "@/icons/hamburger";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
    {
      title: "About Us",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/",
    },
  ];
  return (
    <div className="flex relative justify-between bg-white items-center md:mt-4 max-w-2xl mx-auto md:rounded-full border border-neutral-200 px-2 py-2 md:shadow-aceternity">
      <Image
        className=""
        src="/allmylinks-svgrepo-com.svg"
        alt="logo"
        width={30}
        height={30}
      />
      {/* and hidded md: says this will be visible outside of mobile range */}
      <div className="hidden md:flex items-center gap-4 text-sm text-neutral-500 mr-10">
        {links.map((link, index) => (
          <Link className="hover:text-neutral-400" key={index} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* so the md:hidden says i'll only be visible in s-m-l mobiles only */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <Hamburger />
      </button>
      {open && (
        <div className="absolute flex md:hidden flex-col items-start inset-x-0 top-15 bg-white rounded-md shadow-aceternity">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-400"
              key={index}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
