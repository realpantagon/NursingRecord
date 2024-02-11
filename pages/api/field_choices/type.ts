import { z } from "zod";

export const FieldChoiceSchema = z.object({
    ID: z.string(),
    FieldChoiceData: z.string(),
    WardID:z.string(),
    NurseDiagnosisID:z.string(),
    FieldCategoryID:z.string(),
});

export const UpsertFieldChoiceSchema = z.object({
    ID: z.string().optional(),
    FieldChoiceData: z.string(),
    WardID:z.string(),
    NurseDiagnosisID:z.string(),
    FieldCategoryID:z.string(),
});




export type FieldChoice = z.infer<typeof FieldChoiceSchema>;
export type UpsertFieldChoice = z.infer<typeof UpsertFieldChoiceSchema>;