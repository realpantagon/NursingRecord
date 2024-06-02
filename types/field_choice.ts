import { z } from "zod";
import { WardSchema } from "./ward";
import { NdxSchema } from "./ndx";
import { FieldCategorySchema } from "./field_category";

export const FieldChoiceSchema = z.object({
  ID: z.string(),
  field_choice_data: z.string(),
  ward_id: z.string(),
  ward: WardSchema,
  ndx_id: z.string(),
  ndx: NdxSchema,
  field_category_id: z.string(),
  field_category: FieldCategorySchema,
});

export const CreateFieldChoiceSchema = z.object({
  field_choice_data: z.string(),
  ward_id: z.string(),
  ndx_id: z.string(),
  field_category_id: z.string(),
});

export const UpdateFieldChoiceSchema = z.object({
  ID: z.string(),
  field_choice_data: z.string(),
  ward_id: z.string(),
  ndx_id: z.string(),
  field_category_id: z.string(),
});

export type FieldChoice = z.infer<typeof FieldChoiceSchema>;
export type CreateFieldChoice = z.infer<typeof CreateFieldChoiceSchema>;
export type UpdateFieldChoice = z.infer<typeof UpdateFieldChoiceSchema>;
