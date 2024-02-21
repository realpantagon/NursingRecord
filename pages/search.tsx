import React, { useEffect, useState } from "react";
import Appbar from "@/component/Appbar";
import Searchbar, { SearchType } from "@/component/Searchbar";
import PatientCard from "@/component/PatientData/PatientCard";
import { useQuerySearchPatients } from "./api/patients/searchpatient";

export default function Search() {
	const [searchType, setSearchType] = useState<SearchType | null>(null);
	const [keyword, setKeyword] = useState("");
	const { data: searchResults, refetch } = useQuerySearchPatients({
		an: searchType && searchType.code === "AN" ? keyword : "",
		bed_number: searchType && searchType.code === "BN" ? keyword : "",
		name: searchType && searchType.code === "Name" ? keyword : "",
	});

	useEffect(() => {
		// Define a function to trigger refetch
		const fetchResults = async () => {
			if (searchType) {
				const body = {
					an: searchType.code === "AN" ? keyword : "",
					bed_number: searchType.code === "BN" ? keyword : "",
					name: searchType.code === "Name" ? keyword : "",
				};
			}
			await refetch();
		};

		// Call the refetch function when searchType or keyword changes
		fetchResults();
	}, [searchType, keyword]);

	const handleSearch = (type: SearchType, keyword: string) => {
		setSearchType(type);
		setKeyword(keyword);
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
							
							{searchResults?.map(result => <PatientCard patient={result} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
