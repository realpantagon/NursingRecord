import React, { useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface Category {
  name: string;
  key: string;
}

export default function Activities() {
  const categories: Category[] = [
    { name: "ติดตามและตรวจสอบ V/S ทุก4 ชม.", key: "1" },
    { name: "ดูแลเช็ดตัวลดไข้หาก BT > 38.5 องศา", key: "2" },
    { name: "จัดท่านอนศีรษะสูง ป้องกันการเกิด VAP", key: "3" },
    {
      name: "ดูแลพลิกตะแคงตัวทุก 2 ชม. ช่วยขับสิ่งคัดหลั่งในท่อหายใจ",
      key: "4",
    },
    {
      name: "ดูแลทางเดินหายใจให้โล่ง ดูดเสมหะเมื่อมีเสมหะ และ สังเกตลักษณะสีเสมหะ",
      key: "5",
    },
    {
      name: "ดูแลความสะอาดช่องปากทุกปากทุกเวร โดยใช้น้ำและ แปรงสีฟัน หรือใช้ไม้พันสำลีชุปน้ำยาบ้วนปาก",
      key: "6",
    },
    { name: "ป้องกันการแพร่เชื้อโดยล้างมือให้สะอาด", key: "7" },
    { name: "ดูแลความสะอาดร่างกายแบบ compleate bed bath", key: "8" },
    {
      name: "ดูแลให้ได้รับยาต้านจุลชีพ ตามแผนการรักษา สังเกตผลข้างเคียงของยา ได้แก่ ปวดศีรษะ มึนงง คลื่นไส้อาเจียน ท้องเสียเป็นต้น",
      key: "9",
    },
    {
      name: "ดูแลเก็บเสมหะส่งตรวจทางห้องปฏิบัติการ เพื่อประเมินการติดเชื้อ",
      key: "10",
    },
    { name: "อื่นๆ .......", key: "11" },
  ];
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    categories[1],
  ]);

  const onCategoryChange = (e: CheckboxChangeEvent) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  return (
    <div className="md:mx-auto lg:mx-auto my-4">
      <div className="flex flex-col gap-3 mx-8 ">
        {categories.map((category) => {
          return (
            <div
              key={category.key}
              className="flex align-items-center py-4 px-4 bg-blue-200 rounded-md"
            >
              <Checkbox
                inputId={category.key}
                name="category"
                value={category}
                onChange={onCategoryChange}
                checked={selectedCategories.some(
                  (item) => item.key === category.key
                )}
              />
              <textarea>{category.name}</textarea>
            </div>
          );
        })}
      </div>
    </div>
  );
}
