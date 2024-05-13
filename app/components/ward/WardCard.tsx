import { Ward } from "@/types/ward";
import Link from "next/link";
import React from "react";

const WardCard: React.FC<{ ward: Ward }> = ({ ward }) => {
  return (
    <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md relative">
      <Link
        href={`ward/${ward.ID}/searchPatient`}
        className="no-underline text-black block w-full h-full"
      >
        <div className="bg-blue-600 w-full h-40 rounded-t-lg"></div>
        <div className="mx-8 py-3">
          <div className="">ชื่อ: {ward.group} </div>
        </div>
      </Link>
    </div>
  );
};

export default WardCard;
