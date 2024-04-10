import { z } from "zod";

export const FieldCategorySchema = z.object({
  ID: z.string(),
  FieldType: z.string(),
  IsActive: z.boolean(),
});

export const UpsertFieldCategorySchema = z.object({
  ID: z.string().optional(),
  FieldType: z.string(),
  IsActive: z.boolean(),
});

export type FieldCategory = z.infer<typeof FieldCategorySchema>;
export type UpsertFieldCategory = z.infer<typeof UpsertFieldCategorySchema>;
