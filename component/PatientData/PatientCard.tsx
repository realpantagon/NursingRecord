import React from "react";
import Link from "next/link";
import { Patient } from "@/pages/api/patients/type";

interface PatientCardProps {
	patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
	console.log("PatientCard Props: ", patient);

	return (
		<div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md">
			<Link href="../Form/form" className="no-underline text-black">
				<div className="mx-8 py-4">
					<div className="">ชื่อ: {patient.first_name}</div>
					<div className="">ข้อวินิจฉัยโรค:</div>
					<div className="">เตียง: {patient.bed_number}</div>
					<div className="">บันทึกล่าสุด:</div>
					<div className="">Admit Number:</div>
					<div className="">อายุ: </div>
				</div>
			</Link>
		</div>
	);
};

export default PatientCard;
