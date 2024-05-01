import React, { useState } from "react";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import PatientData from "@/component/patientData/PatientData";
import Focusproblemcard from "@/app/components/patient/FocusProblemCard";
import Focuschartcard from "@/app/components/patient/FocusChartCard";
import { TabView, TabPanel } from "primereact/tabview";

export default function Form() {
  return (
    <div className="bg-stone-100 min-h-screen w-screen">
      <Appbar />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/12 w-11/12 mx-2">
          <div className="2">
            <PatientData />

            <Link
              href="../form/focusProblem/FocusProblemForm"
              className="no-underline text-white w-full "
            >
              <div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-4 w-full shadow-sm">
                เพิ่ม Focus Problem
              </div>
            </Link>
            <Link
              href="../form/focusChart/Form"
              className="no-underline text-white w-full "
            >
              <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-2 w-full shadow-sm">
                เพิ่มแบบบันทึกทางการพยาบาล
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="lg:w-5/12 w-11/12 mx-2 bg-sky-100 rounded-md">
          <div className="mx-4">
            <h1>Focus Chart</h1>
            <hr />
            <div className="text-sm ml-4">การบันทึกล่าสุด</div>
            <Focuschartcard />
            <hr />
            <Focuschartcard />
            <Focuschartcard />
            <Focuschartcard />
          </div>
        </div>
        <div className="lg:w-5/12 w-11/12 mx-2 bg-violet-100 rounded-md">
          <div className="mx-4">
            <h1>Focus Problem</h1>
            <hr />
            <div className="text-sm ml-4">การบันทึกล่าสุด</div>
            <Focusproblemcard />
            <hr />
            <Focusproblemcard />
            <Focusproblemcard />
            <Focusproblemcard />
          </div>
        </div> */}
        <div className="lg:w-10/12 w-11/12 mx-2 bg-sky-100 rounded-md">
          <TabView>
            <TabPanel header="FocusChart">
              <div className="m-2 grid md:grid-cols-4 gap-2 grid-cols-1">
                {/* <h1 className="col-span-full">Focus Chart</h1>
                <hr className="col-span-full" />
                <div className="text-sm ml-4">การบันทึกล่าสุด</div> */}
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
                <Focuschartcard />
              </div>
            </TabPanel>
            <TabPanel header="FocusProblem">
              <div className="m-2 grid md:grid-cols-4 gap-2 grid-cols-1">
                {/* <h1 className="col-span-full">Focus Problem</h1> */}
                {/* <hr className="col-span-full" /> */}
                {/* <div className="text-sm ml-4">การบันทึกล่าสุด</div> */}
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
                <Focusproblemcard />
              </div>
            </TabPanel>
            {/* <TabPanel header="Filter">
              <p className="m-0"></p>
            </TabPanel> */}
          </TabView>
        </div>
      </div>
    </div>
  );
}
