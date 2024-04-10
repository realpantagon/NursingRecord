import { z } from "zod";

export const NdxSchema = z.object({
  ID: z.string(),
  diagnosis: z.string(),
});

export const UpsertNdxSchema = z.object({
  ID: z.string().optional(),
  diagnosis: z.string(),
});

export type Ndx = z.infer<typeof NdxSchema>;
export type UpsertNdx = z.infer<typeof UpsertNdxSchema>;
