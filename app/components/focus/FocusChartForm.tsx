"use client";
import Appbar from "@/app/components/Appbar";
import PatientData from "@/app/components/patient/PatientData";

export default function FocusChartForm() {
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

        <div className="lg:w-10/12 w-11/12 mx-2 bg-sky-100 rounded-md"></div>
      </div>
    </div>
  );
}
