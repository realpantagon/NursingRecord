import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import PatientData from "@/component/patientData/PatientData";
import PatientHistory from "@/component/patientData/PatientHistory";
import { Sidebar } from "primereact/sidebar";
import NDX from "./Ndx";
import Support from "./Support";
import Activities from "./Activities";
import Evaluate from "./Evaluate";

export default function Form() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="bg-stone-100 min-h-screen w-screen">
      <Appbar />
      <div className="card flex justify-content-center mx-8">
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          className="w-full lg:w-3/12 md:w-20rem lg:w-30rem"
        >
          <Link
            href="../form/focusProblem/FocusProblemForm"
            className="no-underline text-white w-full "
          >
            <div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-4 w-full shadow-sm">
              เพิ่ม Focus Problem
            </div>
          </Link>
          <Link href="../Form/Form" className="no-underline text-white w-full ">
            <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-2 w-full shadow-sm">
              เพิ่มแบบบันทึกทางการพยาบาล
            </div>
          </Link>
          <hr />
          <div className="text-sm ml-4">การบันทึกล่าสุด</div>
          <PatientHistory />
          <hr />
          <PatientHistory />
          <PatientHistory />
          <PatientHistory />
        </Sidebar>
        <Button
          icon="pi pi-arrow-right flex-none"
          onClick={() => setVisible(true)}
        />
        <h1 className="text-center text-3xl m-0 flex-1">กรอกข้อมูล</h1>
      </div>

      <div className="flex flex-col xl:mx-52">
        <PatientData />
        <div className="rounded-lg pt-4 bg-white mx-4 lg:mx-52">
          <TabView>
            <TabPanel header="ข้อวินิจฉย" className="mx-auto text-sm">
              <NDX />
            </TabPanel>
            <TabPanel header="ข้อมูลสนับสนุน" className="mx-auto text-sm">
              <Support />
            </TabPanel>
            <TabPanel header="กิจกรรมพยาบาล" className="mx-auto text-sm">
              <Activities />
            </TabPanel>
            <TabPanel header="การประเมินผล" className="mx-auto text-sm">
              <Evaluate />
              <div className="flex flex-row-reverse my-12">
                <Button
                  className="flex w-full md:w-2/12 mx-8 "
                  label="Submit"
                  icon="pi pi-check"
                  iconPos="right"
                />
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
