import { z } from "zod";
import { WardSchema } from "../wards/type";
import { PatientSchema } from "../patients/type";
import { FieldCategorySchema } from "../field_categories/type";

export const FieldSchema = z.object({
  ID: z.string(),
  field_data: z.string(),
  field_category_id: z.string(),
  field_category: FieldCategorySchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type Field = z.infer<typeof FieldSchema>;
