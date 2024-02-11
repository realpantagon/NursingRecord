import { z } from "zod";

export const NoteSchema = z.object({
	ID: z.string(),
	note_data: z.string(),
	ward_id:z.string(),
    field_category_id: z.string(),
    patient_id:z.string(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});


export const UpsertNoteSchema = z.object({
	ID: z.string().optional(),
	note_data: z.string(),
	ward_id:z.string(),
    field_category_id: z.string(),
    patient_id:z.string(),
})

export type Note = z.infer<typeof NoteSchema>;
export type UpsertNote = z.infer<typeof UpsertNoteSchema>;