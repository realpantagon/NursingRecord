"use client";
import React from "react";
import Link from "next/link";
import { TabView, TabPanel } from "primereact/tabview";
import PatientData from "../../../../components/patient/PatientData";
import Appbar from "../../../../components/Appbar";
import { useQueryRecordsByPatientId } from "@/query/record";
import { useQueryNotesByPatientId } from "@/query/note";
import { Record } from "@/types/focusChart";
import { Note } from "@/types/note";
import { useParams } from "next/navigation";
import FocusChartCard from "@/app/components/focus/FocusChartCard";
import FocusProblemCard from "@/app/components/focus/FocusProblemCard";

export default function Patient() {
  const params = useParams();
  const { ward_id, patient_id } = params;
  const focusChartQuery = useQueryRecordsByPatientId(patient_id as string);
  const focusProblemQuery = useQueryNotesByPatientId(patient_id as string);
  const focusCharts: Record[] = focusChartQuery.data;
  const focusProblems: Note[] = focusProblemQuery.data;
  if (focusChartQuery.isLoading || focusProblemQuery.isLoading) return;

  return (
    <div className="bg-stone-100 min-h-screen w-screen">
      <Appbar />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/12 w-11/12 mx-2">
          <div className="2">
            <PatientData />
            <Link
              href={`/ward/${ward_id}/patient/${patient_id}/focusProblem/form`}
              className="no-underline text-white w-full "
            >
              <div className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-4 w-full shadow-sm">
                เพิ่ม Focus Problem
              </div>
            </Link>
            <Link
              href={`/ward/${ward_id}/patient/${patient_id}/focusChart/form`}
              className="no-underline text-white w-full "
            >
              <div className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mb-2 w-full shadow-sm">
                เพิ่มแบบบันทึกทางการพยาบาล
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-10/12 w-11/12 mx-2 bg-sky-100 rounded-md">
          <TabView>
            <TabPanel header="FocusChart">
              <div className="m-2 grid md:grid-cols-4 gap-2 grid-cols-1">
                {focusCharts?.map((focusChart) => (
                  <FocusChartCard key={focusChart.ID} focusChart={focusChart} />
                ))}
              </div>
            </TabPanel>
            <TabPanel header="FocusProblem">
              <div className="m-2 grid md:grid-cols-4 gap-2 grid-cols-1">
                {focusProblems?.map((focusProblem) => (
                  <FocusProblemCard
                    key={focusProblem.ID}
                    focusProblem={focusProblem}
                  />
                ))}
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
