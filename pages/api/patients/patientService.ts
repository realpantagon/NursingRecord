import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchPatient, Patient } from "./type";

export const useQuerySearchPatients = (body: SearchPatient) => {
	const query = useQuery(
		["searchPatients"],
		async () => {
			const response = await axios.post("/api/patients/search", body);
			return response.data;
		},
		{ refetchInterval: 1000 }
	);
	return query;
};
