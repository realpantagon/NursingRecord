import React, { useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface Category {
  name: string;
  key: string;
}

export default function Support() {
  const categories: Category[] = [
    { name: "Dx: Respiratory failure", key: "1" },
    { name: "มีไข้ BT > 38.5 องศา", key: "2" },
    { name: "เสมหะเหลืองข้นเหนียว ปริมาณมาก", key: "3" },
    { name: "ผลการตรวจรังสีทรวงอกผิดปกติ", key: "4" },
    { name: "WBC> 10,000 cell/ul", key: "5" },
    { name: "Sputum c/s พบเชื้อ", key: "6" },
    { name: "ริมฝีปากแห้ง ตัวร้อน", key: "7" },
    { name: "อื่นๆ ......", key: "8" },
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
              className="flex align-items-center py-4 px-4 bg-green-200 rounded-md"
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
              <label htmlFor={category.key} className="ml-2">
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
