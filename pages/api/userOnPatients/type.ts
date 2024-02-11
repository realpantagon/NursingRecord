import { z } from "zod";

export const  UserOnPatientSchema = z.object({
	ID: z.string(),
	user_id: z.string(),
    patient_id:z.string(),
});


export const CreateUserOnPatientSchema = z.object({
	ID: z.string().optional(),
	user_id: z.string(),
    patient_id:z.string(),
})


export type UserOnPatient = z.infer<typeof UserOnPatientSchema>;
export type CreateUserOnPatient = z.infer<typeof CreateUserOnPatientSchema>;