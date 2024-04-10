import { z } from "zod";
export const UserSchema = z.object({
  ID: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  role: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type User = z.infer<typeof UserSchema>;
