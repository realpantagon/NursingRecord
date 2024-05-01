import { z } from "zod";
import { FieldSchema } from "./field";

export const RecordSchema = z.object({
  ID: z.string(),
  bed_number: z.string(),
  shift: z.string(),
  visit_number: z.string(),
  ward_id: z.string(),
  fields: z.array(FieldSchema),
  patient_id: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const UpsertRecordSchema = z.object({
  ID: z.string().optional(),
  bed_number: z.string(),
  shift: z.string(),
  visit_number: z.string(),
  ward_id: z.string(),
  patient_id: z.string(),
});

export type Record = z.infer<typeof RecordSchema>;
export type UpsertRecord = z.infer<typeof UpsertRecordSchema>;
