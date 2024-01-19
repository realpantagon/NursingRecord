import { z } from "zod";

export const PatientSchema = z.object({
	ID: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	identification_id: z.string(),
	age: z.number(),
	phone_number: z.string(),
	birthday: z.string().datetime(),
	hn: z.string(),
	an: z.string(),
	bed_number: z.string(),
	isQuit: z.boolean(),
	status: z.string(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export const SearchPatientSchema = z.object({
	an: z.string().optional(),
	bed_number: z.string().optional(),
	name: z.string().optional(),
});

export const LinkPatientSchema = z.object({
	user_id: z.string(),
	patient_id: z.string(),
});

export const RemoveLinkedPatientsSchema = z.array(z.string());

export type Patient = z.infer<typeof PatientSchema>;

export type SearchPatient = z.infer<typeof SearchPatientSchema>;
export type LinkPatient = z.infer<typeof LinkPatientSchema>;
export type RemoveLinkedPatients = z.infer<typeof RemoveLinkedPatientsSchema>;
