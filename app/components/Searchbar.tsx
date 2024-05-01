import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { SearchPatientOption } from "@/types/search_patient_opt";

interface SearchbarProps {
  onSearch: (searchPatientOption: SearchPatientOption, keyword: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [searchPatientOption, setSearchPatientOption] =
    useState<SearchPatientOption>({
      type: "Admid Number",
      code: "AN",
    });
  const [keyword, setKeyword] = useState("");

  const searchOptions: SearchPatientOption[] = [
    { type: "ชื่อ", code: "Name" },
    { type: "Bed Number", code: "BN" },
    { type: "Admid Number", code: "AN" },
  ];

  const handlesearch = () => {
    onSearch(searchPatientOption, keyword);
  };

  return (
    <div className="p-inputgroup flex-2 max-w-md sm:max-w-xl md:max-w-2xl mx-auto my-4">
      <Dropdown
        value={searchPatientOption}
        onChange={(e) => setSearchPatientOption(e.value)}
        options={searchOptions}
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
