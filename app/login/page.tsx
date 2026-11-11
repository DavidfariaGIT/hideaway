"use client"

import Form from "next/form";
import { useActionState } from "react";
import { login } from "@/lib/actions";
import Link from "next/link"


export default  function Login() {

  const [state, loginAction] = useActionState(login, undefined)

  return (
    <section className="h-175 flex justify-center gap-10 flex-col">
      <h1 className="mb-30 text-center">Account log in</h1>
      <Form
        action={loginAction}
        className="flex flex-col justify-center items-center gap-10"
      >
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
          log in
        </button>
        <Link className="bg-linear-to-r text-transparent bg-clip-text from-black to-gray-400 cursor-pointer hover:underline"
        href="/register"
        >
          Dont have an account? create one
        </Link>
      </Form>
    </section>
  );
}
