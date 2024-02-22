import Image from "next/image";
import cpecmu from "../public/cpecmu.png"
import hospital from "../public/saraburi.jpg";

import React, { useRef, useState } from "react";
import Link from "next/link";
import useAuth from "./api/auth/useAuth";

import { toastRef } from "@/component/toast/toast";

export default function Loginpage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { signIn, error } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    await signIn(username, password, showSuccess, showError);
  };

  const showSuccess = () => {
    if (toastRef.current) {
      toastRef.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Login Successful",
        life: 3000,
      });
    }
  };

  const showError = () => {
    toastRef.current?.show({
      severity: "error",
      summary: "Error",
      detail: "Login Fail",
      life: 3000,
      
    });
  };

  return (
    <div className="bg-stone-100 h-screen flex items-center justify-center m-0">
      <div className="flex flex-row justify-center items-stretch">
        <div className="hidden xl:flex bg-white xl:w-96 justify-center items-center flex-col rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col justify-center items-center space-y-4">
            <Image src={cpecmu} alt="Logo" width={250} />
            <h1 className="text-center">
              คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
              <br /> {/* Line break element */}
              <span>ภาควิชาวิศวกรรมคอมพิวเตอร์</span>
            </h1>
            {/* <Image src={hospital} alt="Logo" width={100} /> */}
            <h1>โรงพยาบาลสระบุรี</h1>
          </div>
        </div>

        <div>
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
            <button
              className="w-full my-5 py-2 bg-emerald-500 shadow-lg shadow-emerald-100 hover:shadow-emerald-300 text-white font-semibold rounded-xl border-none"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
