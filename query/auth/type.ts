import { z } from "zod";

export const LoginSchema = z.object({
  Username: z.string(),
  Password: z.string(),
});

export type Login = z.infer<typeof LoginSchema>;
