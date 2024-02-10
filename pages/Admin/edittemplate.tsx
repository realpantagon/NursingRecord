import Appbar from "@/component/Appbar";
import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { log } from "console";

interface Disease {
  name: string;
  code: string;
}

export default function Template() {
  const diseases: Disease[] = [
    { name: "กลุ่มโรคทางเดินหายใจ", code: "RESPIRATORY" },
  ];
  const [selectDisease, setSelectDisease] = useState<Disease | null>(null);

  console.log(selectDisease);
  return (
    <div>
      <Appbar />
      <div className="xl:w-5/12 xl:mx-auto mx-4 my-8 ">
        <div className="card flex justify-content-center">
          <Dropdown
            value={selectDisease}
            onChange={(e: DropdownChangeEvent) => setSelectDisease(e.value)}
            options={diseases}
            optionLabel="name"
            placeholder="เลือกกลุ่มโรค"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="mx-auto my-8 ">
          <div className="card">
            <Accordion multiple activeIndex={0}>
              <AccordionTab header="ข้อวินิจฉัยทางพยาบาล">
                <p className="m-0">1</p>
              </AccordionTab>
              <AccordionTab header="ข้อวินิจฉัย">
                <p className="m-0">2</p>
              </AccordionTab>
              <AccordionTab header="กิจกรรมพยาบาล">
                <p className="m-0">3</p>
              </AccordionTab>
              <AccordionTab header="การประเมินผล">
                <p className="m-0">4</p>
              </AccordionTab>
            </Accordion>
          </div>
          <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-8">
            บันทึก
          </div>
        </div>
      </div>
    </div>
  );
}
