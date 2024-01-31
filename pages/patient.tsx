import { Button } from "primereact/button";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import { useState } from "react";

export default function Patient() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-stone-100  h-screen">
      {/* <Appbar /> */}
      {/* <div className="xl:mx-32">
        <div className="bg-white mx-4 my-4 rounded-md  px-4 py-4 grid s:grid-cols-2  lg:grid-cols-6 items-center shadow-md">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <div className="flex flex-row justify-between col-span-2">
            <Button className="mx-auto w-5/12 bg-violet-500">
              <Link
                href="../Form/FocusProblem/FocusProblemForm"
                className="no-underline text-white w-full "
              >
                เพิ่ม Focus Problem
              </Link>
            </Button>
            <Button className="mx-auto w-5/12 bg-blue-600">
              <Link
                href="../Form/form"
                className="no-underline text-white w-full "
              >
                เพิ่มแบบบันทึกทางการพยาบาล
              </Link>
            </Button>
          </div>
        </div>
        <div className=" h-full gap-2 mx-4 rounded-md  grid lg:grid-cols-3 md:grid-cols-2 items-center ">
          <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/form" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">บันทึกโดย:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/form" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">บันทึกโดย:</div>
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg">
            <Link href="../Form/form" className="no-underline text-black">
              <div className="mx-8 py-4">
                <div className="">เวลาบันทึก:</div>
                <div className="">บันทึกโดย:</div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div className="flex bg-red-600 w-2/12">hi</div> */}
      <div className="flex flex-col">
        <Appbar />


        <button
          onClick={toggleSidebar}
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 mr-4 ml-4 text-md text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="separator-sidebar"
          className={`fixed top-0 -left-10 z-1 w-96 h-screen transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full  py-4  bg-gray-50 dark:bg-gray-800">
            <ul className=" mt-24 list-none mr-4">
              <li>
                <div className="bg-black">Hi</div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700 list-none ">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <span className="ms-3">Upgrade to Pro</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* <h1 className="text-center text-3xl">ข้อมูลผู้ป่วย</h1> */}
      </div>
    </div>
  );
}
