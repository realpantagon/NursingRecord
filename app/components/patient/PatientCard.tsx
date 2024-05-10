import React, { useContext } from "react";
import Link from "next/link";
import { Patient } from "@/types/searchPatient";
import { PatientIdContext } from "@/providers/ContextProvider";
import { formatDate } from "@/utils/formatDate";

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const { setPatientId } = useContext(PatientIdContext);
  const updateAt = patient.update_at;
  const createAt = patient.create_at;
  const lastRecordDate =
    updateAt === "0001-01-01T00:00:00Z"
      ? formatDate(createAt)
      : formatDate(updateAt);

  const handleClick = () => {
    setPatientId(patient.ID);
  };

  return (
    <div
      className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md"
      onClick={handleClick}
    >
      <Link href="/record" className="no-underline text-black">
        <div className="bg-blue-600 w-full h-6 rounded-t-lg"></div>
        <div className="mx-8 py-4">
          <div className="">ชื่อ: {patient.first_name}</div>
          <div className="">เตียง: {patient.bed_number}</div>
          <div className="">บันทึกล่าสุด: {lastRecordDate}</div>
          <div className="">Admit Number: {patient.an}</div>
          <div className="">อายุ: {patient.age}</div>
        </div>
      </Link>
    </div>
  );
};

export default PatientCard;
