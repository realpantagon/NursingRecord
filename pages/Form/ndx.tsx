import React, { useState } from "react";
import { Button } from "primereact/button";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { TabView, TabPanel } from "primereact/tabview";

export default function NDX() {
  const ndx = [
    {
      name: "เสี่ยงต่อการติดเชื้อระบบทางเดินหายใจ ที่สัมพันธ์กับการใช้เครื่องช่วยหายใจ เนื่องจาก ภาวะการหายใจล้มเหลว",
      key: "1",
    },
    {
      name: "เสี่ยงต่อการเกิดภาวะแทรกซ้อน จากการใส่ท่อช่วยหายใจ เช่น infection, Barotruma , Tracheal ischemia",
      key: "2",
    },
    {
      name: "เสี่ยงต่อการเกิดภาวะสูญเสียการแลกเปลี่ยนก๊าชและภาวะออกซิเจนในเลือดต่ำ(Hypoxemia) เนื่องจากมีเสมหะปริมาณมากในท่อช่วยหายใจ",
      key: "3",
    },
    {
      name: "เกิดภาวะเครียดจากการเจ็บป่วยในระยะวิกฤตเนื่องจากมีภาวะพร่องในการสื่อสาร",
      key: "4",
    },
    {
      name: "ภาวะโภชนาการเปลี่ยนแปลง: ได้รับน้อยกว่าความต้องการของร่างกาย เนื่องจากไม่สามารถรับประทานอาหารได้เพียงพอ จากการย่อยและการดูดซึมผิดปกติหรือมีความต้องการสารอาหารเพิ่มขึ้น",
      key: "5",
    },
    {
      name: "มีความไม่สมดุลของสารน้ำ และอิเลคโตรไลท์เนื่องจากภาวะการหายใจล้มเหลว",
      key: "6",
    },
    {
      name: "เสี่ยงต่อการได้รับออกซิเจนไม่เพียงพอ เนื่องจากการระบายอากาศและ แลกเปลี่ยนก๊สซในถุงลมปอดลดลง",
      key: "7",
    },
    {
      name: "เสี่ยงต่อการเกิดภาวะแทรกซ้อนจากการนอนติดเตียงเป็นเวลานาน",
      key: "8",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(ndx[0]);

  return (
    <div className="md:mx-auto lg:mx-auto ">
      {ndx.map((ndx) => {
        return (
          <div
            key={ndx.key}
            className="flex align-items-center my-4 mx-8 bg-purple-200 rounded-md "
          >
            <RadioButton
              className="my-auto mx-4"
              inputId={ndx.key}
              name="category"
              value={ndx}
              onChange={(e: RadioButtonChangeEvent) =>
                setSelectedCategory(e.value)
              }
              checked={selectedCategory.key === ndx.key}
            />
            <label htmlFor={ndx.key} className="ml-2 py-4 mr-2 text-black">
              {ndx.name}
            </label>
          </div>
        );
      })}
    </div>
  );
}
