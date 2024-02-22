import Appbar from "@/component/Appbar";
import React, { useState,useRef } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
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

  const ndx: Disease[] = [
    { name: "เสี่ยงต่อการติดเชื้อระบบทางเดินหายใจ ที่สัมพันธ์กับการใช้เครื่องช่วยหายใจ เนื่องจาก ภาวะการหายใจล้มเหลว", code: "1" },
    { name: "เสี่ยงต่อการเกิดภาวะแทรกซ้อน จากการใส่ท่อช่วยหายใจ เช่น infection, Barotruma , Tracheal ischemia", code: "2" },
    { name: "เสี่ยงต่อการเกิดภาวะสูญเสียการแลกเปลี่ยนก๊าชและภาวะออกซิเจนในเลือดต่ำ(Hypoxemia) เนื่องจากมีเสมหะปริมาณมากในท่อช่วยหายใจ", code: "3" },
    { name: "เกิดภาวะเครียดจากการเจ็บป่วยในระยะวิกฤตเนื่องจากมีภาวะพร่องในการสื่อสาร", code: "4" },
    { name: "ภาวะโภชนาการเปลี่ยนแปลง: ได้รับน้อยกว่าความต้องการของร่างกาย เนื่องจากไม่สามารถรับประทานอาหารได้เพียงพอ จากการย่อยและการดูดซึมผิดปกติหรือมีความต้องการสารอาหารเพิ่มขึ้น", code: "5" },
    { name: "มีความไม่สมดุลของสารน้ำ และอิเลคโตรไลท์เนื่องจากภาวะการหายใจล้มเหลว", code: "6" },
    { name: "เสี่ยงต่อการได้รับออกซิเจนไม่เพียงพอ เนื่องจากการระบายอากาศและ แลกเปลี่ยนก๊สซในถุงลมปอดลดลง", code: "7" },
    { name: "เสี่ยงต่อการเกิดภาวะแทรกซ้อนจากการนอนติดเตียงเป็นเวลานาน", code: "8" },
  ];
  const [selectNdx, setSelectNdx] = useState<Disease | null>(null);

  console.log(selectDisease);

  const confirmSave = () => {
    confirmDialog({
        message: 'อัปเดทTemplateของบันทึก',
        header: 'Confirmation',
        icon: 'pi pi-check-square',
        accept:()=>{
            toast.current?.show({
                severity: 'success',
                summary: 'Success',
                detail: 'อัปเดทTemplateสำเร็จ',
                life: 1000,
            });
        },
        reject,
        // defaultFocus: 'accept',
        position:'center'
    });
    
};

const reject = () => {
  toast.current?.show({
      severity: 'warn',
      summary: 'Rejected',
      detail: 'ยกเลิกการเปลี่ยนแปลง',
      life: 1000,
      
  });
};
const toast = useRef<Toast>(null);
  return (
    
    <div className="bg-stone-100 min-h-screen">
      <Appbar />
      <h1 className="text-center text-3xl">แก้ไขแแบบบันทึกทางพยาบาล</h1>
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
              <Dropdown
            value={selectNdx}
            onChange={(e: DropdownChangeEvent) => setSelectNdx(e.value)}
            options={ndx}
            optionLabel="name"
            placeholder="เลือกกลุ่มโรค"
            className="w-full md:w-14rem"
          />
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
          <Toast ref={toast} position="bottom-right"/>
          <ConfirmDialog />
          <div onClick={confirmSave} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-8">
            บันทึก
          </div>
        </div>
      </div>
    </div>
  );
}
