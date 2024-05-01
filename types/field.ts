import { z } from "zod";
import { FieldCategorySchema } from "./field_category";

export const FieldSchema = z.object({
  ID: z.string().optional(),
  field_data: z.string(),
  field_category_id: z.number(),
  field_category: FieldCategorySchema.optional(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
});

export type Field = z.infer<typeof FieldSchema>;
