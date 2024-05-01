"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { UpsertNote } from "@/query/notes/type";
import { useMutationUpsertNote } from "@/query/notes/note";
import Appbar from "../../../components/Appbar";
import PatientData from "../../../components/patient/PatientData";
import ConfirmFocus from "../../../components/focus/ConfirmFocus";

export default function FocusProblemForm() {
  const [support, setSupport] = useState("");
  const [activities, setActivities] = useState("");
  const [evaluate, setEvaluate] = useState("");

  const supportTextareaRef = useRef<HTMLTextAreaElement>(null);
  const activitiesTextareaRef = useRef<HTMLTextAreaElement>(null);
  const evaluateTextareaRef = useRef<HTMLTextAreaElement>(null);
  const upsertNoteMutation = useMutationUpsertNote();

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

  const submitFocusProblem = () => {
    const upsertNoteBody: UpsertNote = {
      ward_id: 1,
      field: [
        {
          field_category_id: 4,
          field_data: support,
        },
        {
          field_category_id: 2,
          field_data: activities,
        },
        {
          field_category_id: 1,
          field_data: evaluate,
        },
      ],
      patient_id: 1,
    };

    upsertNoteMutation.mutateAsync(upsertNoteBody);
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
      <div className="flex flex-col sm:mx-0 md:mx-8 pb-96 xl:mx-52">
        <PatientData />
        <div className="card mx-4 xl:mx-80">
          <Accordion multiple activeIndex={[0]}>
            <AccordionTab header="ข้อวินิจฉัย">
              <textarea
                ref={supportTextareaRef}
                className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
                rows={4}
                value={support}
                onChange={supportChange}
              />
            </AccordionTab>
            <AccordionTab header="กิจกรรมพยาบาล">
              <textarea
                ref={activitiesTextareaRef}
                className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
                rows={4}
                value={activities}
                onChange={activitiesChange}
              />
            </AccordionTab>
            <AccordionTab header="การประเมินผล">
              <textarea
                ref={evaluateTextareaRef}
                className="rounded-xl active:outline-none resize-none max-h-96 overflow-hidden w-full"
                rows={4}
                value={evaluate}
                onChange={evaluateChange}
              />
            </AccordionTab>
          </Accordion>
        </div>
        <div className=" mx-4 xl:mx-80 my-4">
          <ConfirmFocus
            submit={submitFocusProblem}
            clearForm={clearfocusproblem}
          />
        </div>
      </div>
    </div>
  );
}
