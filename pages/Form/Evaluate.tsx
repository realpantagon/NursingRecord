import React, { useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

interface Category {
    name: string; 
    key: string;
}

function Evaluate() {
    const categories: Category[] = [
        { name: 'BT 36.5-37.5 องศาเซลเซียส', key: '1' },
        { name: 'ลักษณะเสมหะปกติ ไม่มีสีเหลืองข้น ปริมาณลดลง', key: '2' },
        { name: 'ผลการตรวจ WBC ปกติ 4,000-11,000 cell/ul', key: '3' },
        { name: 'ผลตรวจเสมหะไม่พบเชื้อ', key: '4' },
        { name: 'อื่นๆ .......', key: '11' },
    ];
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([categories[1]]);

    const onCategoryChange = (e: CheckboxChangeEvent) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

  return (
    <div className="md:mx-auto lg:mx-auto my-4">
            <div className="flex flex-col gap-3 mx-8 ">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center py-4 px-4 bg-red-200 rounded-md">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
  )
}

export default Evaluate;