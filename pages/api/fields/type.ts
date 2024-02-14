import { z } from "zod";

export const FieldSchema = z.object({
	ID: z.string(),
	bed_number: z.string(),
	shift:z.string(),
    visit_number: z.string(),
    ward_id:z.string(),
    patient_id:z.string(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});


export type Field = z.infer<typeof FieldSchema>;