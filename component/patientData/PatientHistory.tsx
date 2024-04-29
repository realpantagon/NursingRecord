import React from "react";
import Link from "next/link";

function PatientHistory() {
  return (
    <div className="rounded-md bg-stone-100  hover:bg-gray-300 hover:shadow-lg my-4 shadow-md">
      <Link href="../form/Form" className="no-underline text-black">
        <div className="mx-8 py-4">
          <div className="">เวลาบันทึก:</div>
          <div className="">บันทึกโดย:</div>
        </div>
      </Link>
    </div>
  );
}

export default PatientHistory;
