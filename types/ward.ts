import { z } from "zod";

export const WardSchema = z.object({
	ID: z.string(),
	group: z.string(),
});

export const UpsertWardSchema = z.object({
	ID: z.string().optional(),
	group: z.string(),
});

export type Ward = z.infer<typeof WardSchema>;
export type UpsertWard = z.infer<typeof UpsertWardSchema>;