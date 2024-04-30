import { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import Link from "next/link";
import Appbar from "@/component/Appbar";
import PatientData from "@/component/patientData/PatientData";
import PatientHistory from "@/component/patientData/Focusproblemcard";
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
        <h1 className="text-center text-3xl m-0 flex-1">กรอกข้อมูล</h1>
        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/12 w-11/12 mx-2">
          <div className="2">
            <PatientData />
          </div>
        </div>
        
        <div className="lg:w-10/12 w-11/12 mx-2 bg-sky-100 rounded-md">
          
        </div>
      </div>
    </div>
  );
}
