import { Button } from "primereact/button";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import { useState } from "react";
import Form from "./Form/form";

export default function Patient() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-stone-100  h-screen">
      <div className="flex flex-col">
        <Appbar />
        <div className="flex"></div>
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
          className={`relative top-0 -left-10 z-1 xl:w-3/12 sm:w-5/12 md:4/12 h-screen transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full pt-16  bg-gray-50 dark:bg-gray-800">
            <ul className="  list-none mx-4">
              <li>
                <Button className="mx-auto w-full bg-violet-500">
                  <Link
                    href="../Form/FocusProblem/FocusProblemForm"
                    className="no-underline text-white w-full "
                  >
                    เพิ่ม Focus Problem
                  </Link>
                </Button>
              </li>
              <li className="mt-4">
                <Button className="mx-auto w-full bg-blue-600">
                  <Link
                    href="../Form/form"
                    className="no-underline text-white w-full "
                  >
                    เพิ่มแบบบันทึกทางการพยาบาล
                  </Link>
                </Button>
              </li>
              <hr />
              <div className="text-sm ml-4">การบันทึกล่าสุด</div>
              <li>
                <div className="rounded-md bg-stone-100 h-full hover:bg-gray-300 hover:shadow-lg my-4 shadow-md">
                  <Link href="../Form/form" className="no-underline text-black">
                    <div className="mx-8 py-4">
                      <div className="">เวลาบันทึก:</div>
                      <div className="">บันทึกโดย:</div>
                    </div>
                  </Link>
                </div>
              </li>
              <hr />
            </ul>
            <ul className=" space-y-2 font-medium border-t border-gray-200 dark:border-gray-700 list-none mx-4">
              <li>
                <div className="rounded-md bg-stone-100 h-full hover:bg-gray-300 hover:shadow-lg my-4 shadow-md">
                  <Link href="../Form/form" className="no-underline text-black">
                    <div className="mx-8 py-4">
                      <div className="">เวลาบันทึก:</div>
                      <div className="">บันทึกโดย:</div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="rounded-md bg-stone-100 h-full hover:bg-gray-300 hover:shadow-lg my-4 shadow-md">
                  <Link href="../Form/form" className="no-underline text-black">
                    <div className="mx-8 py-4">
                      <div className="">เวลาบันทึก:</div>
                      <div className="">บันทึกโดย:</div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="rounded-md bg-stone-100 h-full hover:bg-gray-300 hover:shadow-lg my-4 shadow-md">
                  <Link href="../Form/form" className="no-underline text-black">
                    <div className="mx-8 py-4">
                      <div className="">เวลาบันทึก:</div>
                      <div className="">บันทึกโดย:</div>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </aside>
          {/* <Form/> */}
      </div>
    </div>
  );
}
