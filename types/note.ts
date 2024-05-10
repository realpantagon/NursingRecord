import { z } from "zod";
import { FieldSchema } from "./field";
import { WardSchema } from "./ward";
import { FieldCategorySchema } from "./field_category";
import { PatientSchema } from "./searchPatient";

export const NoteSchema = z.object({
  ID: z.string(),
  ward_id: z.string(),
  ward: WardSchema,
  field: z.array(FieldSchema),
  field_category_id: z.string(),
  filed_category: FieldCategorySchema,
  patient_id: z.string(),
  patient: PatientSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const UpsertNoteSchema = z.object({
  ID: z.string().optional(),
  ward_id: z.string(),
  field: z.array(FieldSchema),
  patient_id: z.string(),
});

export type Note = z.infer<typeof NoteSchema>;
export type UpsertNote = z.infer<typeof UpsertNoteSchema>;
