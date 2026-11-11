"use client"

import Form from "next/form";
import { useActionState } from "react";
import { registerUser } from "@/lib/actions";
import Link from "next/link"

export default function Register() {

  const [state, loginAction] = useActionState(registerUser, undefined)

  return (
    <section className="h-175 flex justify-center gap-10 flex-col">
      <h1 className="mb-30 text-center">Register account</h1>
      <Form
        action={loginAction}
        className="flex flex-col justify-center items-center gap-10"
      > <input
          className="w-[70%] border rounded-[15px] py-2 px-5"
          type="text"
          id="name"
          name="name"
          placeholder="name"
        />
        <input
          className="w-[70%] border rounded-[15px] py-2 px-5"
          type="text"
          id="email"
          name="email"
          placeholder="email"
        />
        {state?.errors?.email && (
          <p className="text-red-600">{state.errors.email}</p>
        )}
        <input
          className="w-[70%] border rounded-[15px] py-2 px-5"
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        {state?.errors?.password && (
          <p className="text-red-600">{state.errors.password}</p>
        )}
        <button className="py-2 w-[70%] rounded-[15px] text-left text-white pl-5 bg-linear-to-r bg-transparent bg-clip from-black to-gray-400 cursor-pointer">
          Create Account
        </button>
        <Link className="bg-linear-to-r text-transparent bg-clip-text from-black to-gray-400 cursor-pointer hover:underline"
        href="/login"
        >
         have an account? log in
        </Link>
      </Form>
    </section>
  );
}
