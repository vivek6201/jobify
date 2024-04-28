import { z } from "zod";

export const loginValidations = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "minimum 8 characters are required" }).max(16, { message: "maximum 16 characters are required" })
})

export type LoginValidationsType = z.infer<typeof loginValidations>;

export const signupValidations = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8, { message: "minimum 8 characters are required" }).max(16, { message: "maximum 16 characters are required" }),
    confirmPassword: z.string().min(8, { message: "minimum 8 characters are required" }).max(16, { message: "maximum 16 characters are required" })
}).refine((data) => data.password !== data.confirmPassword, {
    message: "password do not match"
})