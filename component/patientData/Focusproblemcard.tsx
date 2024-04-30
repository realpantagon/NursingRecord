import React from "react";
import Link from "next/link";

function Focusproblemcard() {
  return (
    <div>
    <div className="rounded-md bg-stone-100  hover:bg-gray-300 hover:shadow-lg my-2 shadow-md relative">
      <Link href="../form/Form" className="no-underline text-black">
      <div className="bg-purple-600 w-full h-7 rounded-t-lg flex flex-row-reverse"><i className="pi pi-print mx-2 mt-1" style={{ color: 'white' }}/></div>
        <div className="mx-8 py-4">
          <div className="">เวลาบันทึก:</div>
          <div className="">บันทึกโดย:</div>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Focusproblemcard;
