import React, { useState } from "react";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

interface SearchType {
  name: string;
  code: string;
}

export default function Searchbar() {
  const [selectedSearchType, setSelectedSearchType] = useState<SearchType | null>(null);
  const [keyword,setKeyword] = useState("");
  const searchtype:SearchType[] = [
    { name: "ชื่อ ", code: "Name" },
    { name: "Bed Number", code: "BN" },
    { name: "Admid Number", code: "AD" },
  ];

  const handlesearch = ()=>{
    console.log(selectedSearchType?.code);
    console.log(keyword);
  }
  return (
    <div className="p-inputgroup flex-2 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
      <Dropdown
        value={selectedSearchType}
        onChange={(e) => setSelectedSearchType(e.value)}
        options={searchtype}
        optionLabel="name"
        placeholder="ค้นหาจาก"
        className=""
      ></Dropdown>
      <InputText placeholder="Keyword" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
      <Link href="patient">
        <Button label="ค้นหา" onClick={handlesearch} className="bg-blue-600"/>
      </Link>
    
    </div>
  );
}
