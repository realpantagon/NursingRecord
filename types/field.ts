import { z } from "zod";
import { FieldCategorySchema } from "./field_category";

export const FieldSchema = z.object({
  ID: z.number().optional(),
  field_data: z.string(),
  field_category_id: z.number(),
  field_category: FieldCategorySchema.optional(),
  create_at: z.string().datetime().optional(),
  update_at: z.string().datetime().optional(),
});

export type Field = z.infer<typeof FieldSchema>;
