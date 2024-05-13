import React from "react";
import Link from "next/link";
import { Record } from "@/types/focusChart";
import { formatDate } from "@/utils/formatDate";
import { useParams } from "next/navigation";

const FocusChartCard: React.FC<{ focusChart: Record }> = ({ focusChart }) => {
  const params = useParams();
  const { ward_id, patient_id } = params;
  const updateAt = focusChart.update_at;
  const createAt = focusChart.create_at;
  const lastRecordDate =
    updateAt === "0001-01-01T00:00:00Z"
      ? formatDate(createAt)
      : formatDate(updateAt);

  return (
    <div>
      <div className="rounded-md bg-stone-100  hover:bg-gray-300 hover:shadow-lg my-2 shadow-md relative">
        <Link
          href={`/ward/${ward_id}/patient/${patient_id}/focusChart/${focusChart.ID}`}
          className="no-underline text-black"
        >
          <div className="bg-blue-600 w-full h-7 rounded-t-lg flex flex-row-reverse">
            <i className="pi pi-print mx-2 mt-1" style={{ color: "white" }} />
          </div>
          <div className="mx-8 py-4">
            <div className="">
              เวลาบันทึก:
              {lastRecordDate}
            </div>
            <div className="">บันทึกโดย:</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FocusChartCard;
