import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-100 py-4 border-b border-s-slate-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">Logo</Link>
        <Link
          href="/sign-in"
          className="bg-zinc-900 text-white py-3 px-4 rounded-md"
        >
          Sign-In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
