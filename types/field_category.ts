import { z } from "zod";

export const FieldCategorySchema = z.object({
  ID: z.number(),
  field_type: z.string(),
  isActive: z.boolean(),
});

export const UpsertFieldCategorySchema = z.object({
  ID: z.number().optional(),
  field_type: z.string(),
  is_active: z.boolean(),
});

export type FieldCategory = z.infer<typeof FieldCategorySchema>;
export type UpsertFieldCategory = z.infer<typeof UpsertFieldCategorySchema>;
