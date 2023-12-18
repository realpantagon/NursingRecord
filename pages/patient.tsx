import Navbar from "./../component/navbar";
import { Backdrop } from "@/styles/StyledComponent/Background/Background.styles";
import styles from "../styles/home.module.css";
import { Button } from "primereact/button";
import { Pagination } from "@mantine/core";
import Link from "next/link";

import ndxform from "./Form/ndx";

export default function Patient() {
  return (
    <div className="bg-gradient-to-b from-teal-300 to-indigo-300  h-screen">
      <Navbar />
      <h1 className={styles.font}>ข้อมูลผู้ป่วย</h1>
      <div className={styles.contentcontainer}>
        <div className="bg-gray-200 mx-8 my-8 rounded-md  px-8 py-4 grid md:grid-cols-2  lg:grid-cols-5 items-center">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <Button className="flex items-center justify-center md:col-span-2 lg:col-span-1">
          <Link href="../Form/ndx" className="no-underline text-white w-full">
            เพิ่มการบันทึก
          </Link>
          </Button>
        </div>
        <div className=" h-full gap-2  mx-4 mb-8 rounded-md px-8 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-gray-200 h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/ndx" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">NDX:</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <Pagination total={data.length} value={activePage} onChange={setPage} className="py-8 flex justify-center"  color="cyan" size="md" radius="md" /> */}
      <Pagination
        className="py-8 flex justify-center"
        total={10}
        color="cyan"
        size="md"
        radius="md"
      />
    </div>
  );
}
