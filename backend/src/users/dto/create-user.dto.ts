import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
