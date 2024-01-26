import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import Appbar from "@/component/Appbar";

export default function Search() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "ชื่อ ", code: "N" },
    { name: "Bed Number", code: "R" },
    { name: "Admid Number", code: "A" },
  ];

  return (
     <div className="bg-stone-100  h-screen">
      <Appbar/>
      <h1 className="text-center text-3xl">ค้นหาผู้ป่วย</h1>
      <div >
        <div>
          <div className="p-inputgroup flex-1 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="ค้นหาจาก"
              className="w-8"
            ></Dropdown>
            <InputText placeholder="Keyword"  />
            <Link href="patient">
              <Button label="ค้นหา" />
            </Link>
          </div>
          <div >
            <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
              <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
                <Link href="../patient" className="no-underline text-black">
                  <div className="mx-8 py-4">
                  <div className="">ชื่อ:</div>
                    <div className="">ผู้ป่วย:</div>
                    <div className="">เตียง:</div>
                    <div className="">บันทึกล่าสุด:</div>
                    <div className="">Admit Number:</div>
                    <div className="">วันเกิด:</div>
                  </div>
                </Link>
              </div>
              <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
                <Link href="../patient" className="no-underline text-black">
                  <div className="mx-8 py-4">
                  <div className="">ชื่อ:</div>
                    <div className="">ค้นหาผู้ป่วย:</div>
                    <div className="">เตียง:</div>
                    <div className="">บันทึกล่าสุด:</div>
                    <div className="">Admit Number:</div>
                    <div className="">วันเกิด:</div>
                  </div>
                </Link>
              </div>
              <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
                <Link href="../patient" className="no-underline text-black">
                  <div className="mx-8 py-4">
                  <div className="">ชื่อ:</div>
                    <div className="">ค้นหาผู้ป่วย:</div>
                    <div className="">เตียง:</div>
                    <div className="">บันทึกล่าสุด:</div>
                    <div className="">Admit Number:</div>
                    <div className="">วันเกิด:</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
