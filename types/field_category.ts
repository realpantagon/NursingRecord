import { z } from "zod";

export const FieldCategorySchema = z.object({
  ID: z.number(),
  field_type: z.string(),
  isActive: z.boolean(),
});

export const CreateFieldCategorySchema = z.object({
  field_type: z.string(),
});

export type FieldCategory = z.infer<typeof FieldCategorySchema>;
export type CreateFieldCategory = z.infer<typeof CreateFieldCategorySchema>;
export type UpdateFieldCategory = z.infer<typeof FieldCategorySchema>;
