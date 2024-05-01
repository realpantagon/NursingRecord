import { z } from "zod";
export const SearchPatientOptionsSchema = z.object({
  ID: z.string().optional(),
  type: z.string(),
  code: z.string(),
});

export type SearchPatientOption = z.infer<typeof SearchPatientOptionsSchema>;
