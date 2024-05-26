import { z } from "zod";

export const WardSchema = z.object({
	ID: z.number(),
	group: z.string(),
});

export const UpsertWardSchema = z.object({
	ID: z.number().optional(),
	group: z.string(),
});

export type Ward = z.infer<typeof WardSchema>;
export type UpsertWard = z.infer<typeof UpsertWardSchema>;
