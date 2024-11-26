import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(3, "El nombre es obligatorio").max(20, "El nombre debe tener menos de 20 caracteres"),
    email: z.string().email("Correo invalido").min(1, "El correo es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener minimo 6 caracteres")
      .max(20, "La contraseña debe tener menos de 20 caracteres"),
    confirmPassword: z.string().min(6, "La confirmacion debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;
