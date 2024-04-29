import React from "react";
import Link from "next/link";

function WardCard() {
  return (
    <div className="rounded-md bg-white h-full hover:bg-gray-300 hover:shadow-lg shadow-md relative">
      <Link
        href="../Search"
        className="no-underline text-black block w-full h-full"
      >
        <div className="bg-blue-600 w-full h-44 rounded-t-lg"></div>
        <div className="mx-8 py-3">
          <div className="">ชื่อ: </div>
        </div>
      </Link>
    </div>
  );
}

export default WardCard;
