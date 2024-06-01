import { z } from "zod";

export const WardSchema = z.object({
	ID: z.number(),
	group: z.string(),
	is_active: z.boolean(),
});

export const CreateWardSchema = z.object({
	group: z.string(),
});
;

export type Ward = z.infer<typeof WardSchema>;
export type CreateWardBody = z.infer<typeof CreateWardSchema>;
export type UpdateWardBody = z.infer<typeof WardSchema>;
