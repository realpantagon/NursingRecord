import { z } from "zod";
import { FieldSchema } from "../fields/type";
import { WardSchema } from "../wards/type";
import { FieldCategorySchema } from "../field_categories/type";
import { PatientSchema } from "../patients/type";

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
  ward_id: z.number(),
  field: z.array(FieldSchema),
  patient_id: z.number(),
});

export type Note = z.infer<typeof NoteSchema>;
export type UpsertNote = z.infer<typeof UpsertNoteSchema>;
