import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Appbar from "@/component/Appbar";
import ConfirmFocus from "@/component/Focus/Confirmfocus";
import Support from './../support';
import { Accordion, AccordionTab } from 'primereact/accordion';
import PatientData from "@/component/PatientData/PatientData";

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
        <PatientData/>
        <div className="card mx-4 xl:mx-80">
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="ข้อวินิจฉัย">
                <textarea
              ref={supportTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
              rows={1}
              value={support}
              onChange={supportChange}
            />
                </AccordionTab>
                <AccordionTab header="กิจกรรมพยาบาล">
                <textarea
              ref={activitiesTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
              rows={1}
              value={activities}
              onChange={activitiesChange}
            />
                </AccordionTab>
                <AccordionTab header="การประเมินผล">
                <textarea
              ref={evaluateTextareaRef}
              className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
              rows={1}
              value={evaluate}
              onChange={evaluateChange}
            />
                </AccordionTab>
            </Accordion>
        </div>
        <div className=" mx-4 xl:mx-80 my-4">
          <ConfirmFocus support={support} activities={activities} evaluate={evaluate} clearForm={clearfocusproblem}/>
          </div>
      </div>
    </div>
  );
}
