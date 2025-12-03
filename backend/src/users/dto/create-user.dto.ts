import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.union([
    z.string().min(1, "名前は必須です"),
    z.undefined().transform(() => z.NEVER).pipe(
      z.never({ message: "名前は必須です" })
    ),
  ]),

  email: z.union([
    z.string()
      .min(1, "メールアドレスは必須です")
      .email("メールアドレスの形式が正しくありません"),
    z.undefined().transform(() => z.NEVER).pipe(
      z.never({ message: "メールアドレスは必須です" })
    ),
  ]),
});




export type CreateUserDto = z.infer<typeof CreateUserSchema>;
