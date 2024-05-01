import React from "react";
import Link from "next/link";
import { Patient } from "@/query/patients/type";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md">
      <Link href="../record" className="no-underline text-black">
        <div className="bg-blue-600 w-full h-6 rounded-t-lg"></div>
        <div className="mx-8 py-4">
          <div className="">ชื่อ: {patient.first_name}</div>
          <div className="">เตียง: {patient.bed_number}</div>
          <div className="">บันทึกล่าสุด: {patient.updated_at}</div>
          <div className="">Admit Number: {patient.an}</div>
          <div className="">อายุ: {patient.age}</div>
        </div>
      </Link>
    </div>
  );
};

export default PatientCard;
