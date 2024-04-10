import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export interface SearchType {
	type: string;
	code: string;
}

interface SearchbarProps {
	onSearch: (searchType: SearchType, keyword: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
	const [selectedSearchType, setSelectedSearchType] =
		useState<SearchType | null>(null);
	const [keyword, setKeyword] = useState("");

	const searchtype: SearchType[] = [
		{ type: "ชื่อ ", code: "Name" },
		{ type: "Bed Number", code: "BN" },
		{ type: "Admid Number", code: "AN" },
	];

	const handlesearch = () => {
		if (selectedSearchType) {
			// console.log({
			// 	selectedSearchType: selectedSearchType.code,
			// 	keyword: keyword,
			// });

			// Call the onSearch prop with the selected search type and keyword
			onSearch(selectedSearchType, keyword);
		} else {
			console.log({ keyword: keyword });
		}
	};

	return (
		<div className="p-inputgroup flex-2 max-w-md sm:max-w-xl md:max-w-2xl mx-auto my-4">
			<Dropdown
				value={selectedSearchType}
				onChange={(e) => setSelectedSearchType(e.value)}
				options={searchtype}
				optionLabel="type"
				placeholder="ค้นหาจาก"
				className=""
			></Dropdown>
			<InputText
				placeholder="Keyword"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<Button label="ค้นหา" onClick={handlesearch} className="bg-blue-600" />
		</div>
	);
};

export default Searchbar;
