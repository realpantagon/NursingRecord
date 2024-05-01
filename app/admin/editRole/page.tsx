"use client";
import React from "react";
import NurseList from "@/app/components/nurse/NurseList";
import Appbar from "../../components/Appbar";

function EditRoles() {
  return (
    <div className="bg-stone-100 min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl">แก้ไขสิทธิ์พยาบาล</h1>
      <div className=" flex flex-col items-center">
        <div className=" bg-white w-full md:w-8/12 p-4 rounded-md">
          <NurseList />
        </div>
      </div>
    </div>
  );
}

export default EditRoles;
