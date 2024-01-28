import saraburi from "../public/nurse2.jpeg";
import Image from "next/image";
import React, { useState } from "react";

import useAuth from "./api/auth/useAuth";
import { log } from "console";

export default function PageLogin() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signIn, error } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    await signIn(username, password);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image
          className="w-full h-full object-cover"
          src={saraburi}
          alt="Saraburi"
        />
      </div>
      <div className="bg-stone-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-2xl  shadow-2xl">
          <h2 className="text-4xl font-bold text-center">Nursing Record</h2>
          <h2 className="text-2xl font-bold text-center">
            ระบบจัดการการบันทึกทางพยาบาล
          </h2>
          <div className="flex flex-col text-grey-400 py-2">
            <label>Username</label>
            <input
              className="rounded-xl bg-white focus:border-blue-500 focus:bg-stone-100 focus:outline-none"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-grey-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-xl bg-white focus:border-black focus:bg-stone-100 focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full my-5 py-2 bg-emerald-500 shadow-lg shadow-emerald-100 hover:shadow-emerald-300 text-white font-semibold rounded-xl border-none"
          onClick={(e) => {
            handleLogin(e);
          }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
