import React, { useState } from "react";
import styles from "../styles/search.module.css";

import Navbar from "@/component/navbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import Link from "next/link";
import ndxform from './Form/ndx';

export default function search() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "ชื่อ ", code: "N" },
    { name: "Bed Number", code: "R" },
    { name: "Admid Number", code: "A" },
  ];

  return (
    <div className={styles.container}>
      <Navbar />
        <h1 className={styles.font}>ค้นหาผู้ป่วย</h1>
      <div className={styles.barcontainer}>
        <div className={styles.butgroup}>
          <div className="p-inputgroup flex-1 sm:max-w-full md:max-w-xl mx-auto" >
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="ค้นหาจาก"
              className="w-8"
            ></Dropdown>
            <InputText placeholder="Keyword" className={styles.input} />
            <Link href="patient">
            <Button label="ค้นหา" className="" />  
            </Link>
          </div>
        <div className={styles.contentcontainer}>
        
        </div>
        </div>
      </div>
    </div>
  );
}
