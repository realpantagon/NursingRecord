"use client";
import React from "react";

import Appbar from "../components/Appbar";
import Searchbar from "../components/Searchbar";
import PatientCard from "../components/patient/PatientCard";
import { useQuerySearchPatients } from "@/query/searchpatient";
import { SearchPatientOption } from "@/types/search_patient_opt";
import { Patient, SearchPatient } from "@/types/searchPatient";

export default function Search() {
  const patientsQuery = useQuerySearchPatients();

  const handleSearch = async (type: SearchPatientOption, keyword: string) => {
    const body: SearchPatient = {
      an: type.code === "AN" ? keyword : "",
      bed_number: type.code === "BN" ? keyword : "",
      name: type.code === "Name" ? keyword : "",
    };

    await patientsQuery.mutateAsync(body);
  };

  return (
    <div className="bg-stone-100 min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl">ค้นหาผู้ป่วย</h1>
      <div>
        <div>
          <Searchbar onSearch={handleSearch} />
          <div className="xl:mx-52">
            <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
              {patientsQuery.data?.map((patient: Patient) => (
                <PatientCard key={patient.ID} patient={patient} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
