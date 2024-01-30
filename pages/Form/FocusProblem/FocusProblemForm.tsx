import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Appbar from "@/component/Appbar";

export default function FocusProblemForm() {
  const [support, setSupport] = useState("");
  const [activities, setActivities] = useState("");
  const [evaluate, setEvaluate] = useState("");

  const supportTextareaRef = useRef<HTMLTextAreaElement>(null);
  const activitiesTextareaRef = useRef<HTMLTextAreaElement>(null);
  const evaluateTextareaRef = useRef<HTMLTextAreaElement>(null);

  const supportChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSupport(e.target.value);
  };
  const activitiesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setActivities(e.target.value);
  };
  const evaluateChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEvaluate(e.target.value);
  };

  const handleTextareaResize = (
    textareaRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleTextareaResize(supportTextareaRef);
  }, [support]);

  useEffect(() => {
    handleTextareaResize(activitiesTextareaRef);
  }, [activities]);

  useEffect(() => {
    handleTextareaResize(evaluateTextareaRef);
  }, [evaluate]);

  const submitfocusproblem = () => {
    console.log("Submitting focus problem:", { support, activities, evaluate });
  };

  const clearfocusproblem = () => {
    setSupport("");
    setActivities("");
    setEvaluate("");
  };

  return (
    <div className="bg-stone-100 h-full">
      <Appbar />
      <h1 className="text-center text-3xl m-0">กรอกข้อมูล Focus Problem</h1>
      <div className="flex flex-col sm:mx-0 md:mx-8 pb-96 xl:mx-32">
        <div className="bg-white mx-4 my-4 rounded-md px-4 py-4 grid md:grid-cols-2  lg:grid-cols-5 items-center shadow-md">
          <div className="my-2">ชื่อ:</div>
          <div className="my-2">วันเกิด:</div>
          <div className="my-2">Bed Number:</div>
          <div className="my-2">Admit Number:</div>
          <div className="my-2">เวลาบันทึก:</div>
        </div>
        <div className="flex flex-col justify-center mx-4 xl:mx-80 bg-white rounded-2xl">
          <div className="my-4 xl:mx-8 px-4 py-8 bg-teal-100 flex flex-col rounded-xl">
            <label className="mb-4 text-xl font-bold">ข้อมูลสนับสนุน</label>
            <textarea
              ref={supportTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden"
              rows={1}
              value={support}
              onChange={supportChange}
            />
          </div>

          <div className="my-4 xl:mx-8 px-4 py-8 bg-indigo-100 flex flex-col rounded-xl">
            <label className="mb-4 text-xl font-bold">กิจกรรมพยาบาล</label>
            <textarea
              ref={activitiesTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden"
              rows={1}
              value={activities}
              onChange={activitiesChange}
              
            />
          </div>

          <div className="my-4 xl:mx-8 px-4 py-8 bg-purple-100 flex flex-col rounded-xl">
            <label className="mb-4 text-xl font-bold">การประเมินผล</label>
            <textarea
              ref={evaluateTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden"
  rows={1}
              rows={1}
              value={evaluate}
              onChange={evaluateChange}
            />
          </div>
        </div>
        <div className="flex justify-between mx-4 xl:mx-80 my-4">
          <div
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white px-12 py-2 rounded-md"
            onClick={submitfocusproblem}
          >
            {" "}
            บันทึก
          </div>
          <div
            className="hover:bg-red-300 px-2 py-2 rounded-md"
            onClick={clearfocusproblem}
          >
            ล้างแบบฟอร์ม
          </div>
        </div>
      </div>
    </div>
  );
}
