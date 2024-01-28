// pages/index.tsx or any other relevant file
import React, { useEffect, useState } from "react";
import { useQuerySearchPatients } from "./api/patients/patientService";
import { Patient } from "./api/patients/type";
const HomePage: React.FC = () => {
	const body = {
		an: "",
		bed_number: "",
		name: "",
	};

	const fetchedPatients = useQuerySearchPatients(body);

	if (fetchedPatients.isLoading) {
		return <div>Loading...</div>;
	}
	console.log(fetchedPatients);

	return (
		<div>
			<h1>Patient List</h1>
		</div>
	);
};

export default HomePage;
