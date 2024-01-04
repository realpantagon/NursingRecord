import React from "react";
import styles from "../styles/home.module.css";
import Navbar from "@/component/navbar";
import Link from "next/link";
import { fetchData } from "./api/patients/patientService";

export default function Test() {
	const data = fetchData();
	console.log(data);

	return <div>Test</div>;
}
