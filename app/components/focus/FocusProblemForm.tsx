"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useQueryGetFieldCategories } from "@/query/field_category";
import { FieldCategory } from "@/types/field_category";
import Appbar from "@/app/components/Appbar";
import PatientData from "@/app/components/patient/PatientData";
import ConfirmFocus from "@/app/components/focus/ConfirmFocus";
import { useParams, useRouter } from "next/navigation";
import {
  useMutationCreateNote,
  useMutationUpdateNote,
  useQueryNote,
} from "@/query/note";
import { Note, UpsertNote } from "@/types/note";

export default function FocusProblemForm() {
  const router = useRouter();
  const params = useParams();
  const { patient_id, ward_id, focus_problem_id } = params;
  const patientId = +patient_id;
  const wardId = +ward_id;
  const focusProblemId = +focus_problem_id;
  const updateNoteMutation = useMutationUpdateNote();
  const createNoteMutation = useMutationCreateNote();
  const focusProblemQuery = focusProblemId
    ? useQueryNote(focusProblemId)
    : null;
  const fieldCategoryQuery = useQueryGetFieldCategories();
  const focusProblem: Note = focusProblemQuery?.data;
  const fieldCategory: FieldCategory[] = fieldCategoryQuery.data;
  const ACategory = fieldCategory?.find(
    (category) => category.field_type === "A_TEXT"
  );
  const ECategory = fieldCategory?.find(
    (category) => category.field_type === "E_TEXT"
  );
  const SCategory = fieldCategory?.find(
    (category) => category.field_type === "S_TEXT"
  );

  const [support, setSupport] = useState("");
  const [activities, setActivities] = useState("");
  const [evaluate, setEvaluate] = useState("");

  ///////////////////////TEXT_AREA_SECTION///////////////////////////
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
  ///////////////////////END_TEXT_AREA_SECTION///////////////////////////
  useEffect(() => {
    const activityField = focusProblem?.fields.find(
      (field) => field.field_category_id === ACategory?.ID
    );
    const evaluateField = focusProblem?.fields.find(
      (field) => field.field_category_id === ECategory?.ID
    );
    const supportField = focusProblem?.fields.find(
      (field) => field.field_category_id === SCategory?.ID
    );
    setActivities(activityField?.field_data ?? "");
    setEvaluate(evaluateField?.field_data ?? "");
    setSupport(supportField?.field_data ?? "");
  }, [focusProblem]);

  const submitFocusProblem = async () => {
    const noteBody: UpsertNote = {
      ward_id: wardId,
      fields: [],
      patient_id: patientId,
    };

    const categoriesData = [
      { category: ACategory, data: activities },
      { category: ECategory, data: evaluate },
      { category: SCategory, data: support },
    ];

    categoriesData.forEach(({ category, data }) => {
      if (category && data) {
        noteBody.fields.push({
          field_category_id: category.ID,
          field_data: data,
        });
      }
    });

    const response = focusProblemId
      ? await updateNoteMutation.mutateAsync({
          ...noteBody,
          ID: focusProblemId,
        })
      : await createNoteMutation.mutateAsync(noteBody);

    if (response) {
      router.push(
        `/ward/${wardId}/patient/${patientId}/${
          focusProblemId ? `focusProblem/${focusProblemId}` : ""
        }`
      );
      clearfocusproblem();
    }
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
