import React from "react";
import Link from "next/link";
import { Patient } from "@/pages/api/patients/type";

interface PatientCardProps {
	patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
	// console.log(patient);

	return (
		<div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md">
			<Link href="../Form/form" className="no-underline text-black">
				<div className="mx-8 py-4">
					<div className="">ชื่อ: {patient.first_name}</div>
					<div className="">เตียง: {patient.bed_number}</div>
					<div className="">บันทึกล่าสุด: {patient.updated_at}</div>
					<div className="">Admit Number: {patient.an}</div>
					<div className="">อายุ: {patient.age}</div>
				</div>
			</Link>
		</div>
  // return <></>
	);
};

export default PatientCard;
