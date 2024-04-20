import React from "react";
import Appbar from "@/component/Appbar";
import Searchbar, { SearchType } from "@/component/Searchbar";
import PatientCard from "@/component/PatientData/PatientCard";
import { useQuerySearchPatients } from "@/query/patients/searchpatient";
import { Patient, SearchPatient } from "@/query/patients/type";

export default function Search() {
  const patientsQuery = useQuerySearchPatients();

  const handleSearch = async (type: SearchType, keyword: string) => {
    const body: SearchPatient = {
      an: type.code === "AN" ? keyword : "",
      bed_number: type.code === "BN" ? keyword : "",
      name: type.code === "Name" ? keyword : "",
    };

    await patientsQuery.mutateAsync(body);
  };

  // if (!patientsQuery.data) return;
  return (
    <div className="bg-stone-100 min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl">ค้นหาผู้ป่วย</h1>
      <div>
        <div>
          <Searchbar onSearch={handleSearch} />
          <div className="xl:mx-52">
            <div className=" h-full gap-2 rounded-md px-4 py-4 grid lg:grid-cols-3 md:grid-cols-2 items-center ">
              {patientsQuery.data?.map((result: Patient) => (
                <PatientCard patient={result} key={result.ID} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
