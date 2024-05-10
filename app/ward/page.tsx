"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import Appbar from "../components/Appbar";
import CreateWard from "../components/ward/CreateWard";
import { useQueryWards } from "@/query/ward";
import { Ward } from "@/types/ward";
import WardCard from "../components/ward/WardCard";

export default function Home() {
  const [isCreateWardDialogOpen, setCreateWardDialogOpen] = useState(false);

  const queryWards = useQueryWards();
  const wards: Ward[] = queryWards.data;

  const openCreateWardDialog = () => {
    setCreateWardDialogOpen(true);
  };

  const closeCreateWardDialog = () => {
    setCreateWardDialogOpen(false);
  };

  if (queryWards.isLoading) return;

  return (
    <div className="bg-stone-100  min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl ">เลือกกลุ่มโรค</h1>
      <div className="xl:mx-52">
        <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-4 md:grid-cols-2 items-center ">
          {wards.map((ward) => (
            <WardCard key={ward.ID} ID={ward.ID} group={ward.group} />
          ))}
          <div
            className="rounded-md bg-white h-52 hover:bg-gray-300 hover:shadow-lg shadow-md flex items-center justify-center"
            onClick={openCreateWardDialog}
          >
            <i
              className="pi pi-plus-circle"
              style={{ fontSize: "2rem", color: "black" }}
            />
            <div />
            <h2> เพิ่มกลุ่มโรค</h2>
          </div>
        </div>
      </div>
      <CreateWard
        visible={isCreateWardDialogOpen}
        onClose={closeCreateWardDialog}
      />
    </div>
  );
}
