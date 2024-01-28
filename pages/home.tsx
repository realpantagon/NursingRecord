import React from "react";
import Link from "next/link";
import Appbar from "@/component/Appbar";

export default function Home() {
  return (
    <div className="bg-stone-100  h-screen">
      <Appbar />
      <h1 className="text-center text-3xl ">ผู้ป่วยที่ต้องดูแล</h1>
      <div className="xl:mx-32">
        <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
          <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../patient" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">ชื่อ:</div>
                <div className="">ข้อวินิจฉัยโรค:</div>
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
                <div className="">ข้อวินิจฉัยโรค:</div>
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
                <div className="">ข้อวินิจฉัยโรค:</div>
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
                <div className="">ข้อวินิจฉัยโรค:</div>
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
  );
}
