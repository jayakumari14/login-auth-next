"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";

const SignUPForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="form_box w-full">
      <form className="formSubmitBtn w-full " onSubmit={submitForm}>
        <label>User Name:</label>
        <input
          className="rounded-md"
          type="text"
          name="username"
          value=""
          placeholder="enter your name"
        />{" "}
        <br />
        <label>Email:</label>
        <input
          className="rounded-md"
          type="email"
          name="email"
          value={email}
          placeholder="enter your email"
        />{" "}
        <br />
        <label>Password:</label>
        <input
          className="rounded-md"
          type="password"
          name="password"
          placeholder="enter your password"
          value={password}
        />{" "}
        <br />
        <button
          type="submit"
          className="submit_button bg-slate-800 text-white mt-6 w-full"
        >
          Sign In
        </button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <button>Sign in with Google</button>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUPForm;
