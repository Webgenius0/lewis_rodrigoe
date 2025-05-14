import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
    password_confirmation: z.string().min(1, "Confirm Password is required"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
    gender: z.enum(["male", "female", "other"], {
      required_error: "Gender is required",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
