import { Button } from "primereact/button";
import { Pagination } from "@mantine/core";
import Link from "next/link";
import Appbar from "@/component/Appbar";


export default function Patient() {
  return (
    <div className="bg-stone-100  h-screen">
      <Appbar/>
      <h1 className="text-center text-3xl">ข้อมูลผู้ป่วย</h1>
      <div className="">
        <div className="bg-white mx-4 my-4 rounded-md  px-4 py-4 grid md:grid-cols-2  lg:grid-cols-5 items-center">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <Button className="flex items-center justify-center md:col-span-2 lg:col-span-1">
          <Link href="../Form/form" className="no-underline text-white w-full">
            เพิ่มการบันทึก
          </Link>
          </Button>
        </div>
        <div className=" h-full gap-2  rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
          <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/form" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">บันทึกโดย:</div>
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
