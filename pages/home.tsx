import React from "react";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import PatientCard from "@/component/PatientData/PatientCard";

export default function Home() {
  return (
    <div className="bg-stone-100  min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl ">ผู้ป่วยที่ต้องดูแล</h1>
      <div className="xl:mx-52">
        <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
          {/* <PatientCard/>
          <PatientCard/>
          <PatientCard/>
          <PatientCard/> */}
        </div>
      </div>
    </div>
  );
}
