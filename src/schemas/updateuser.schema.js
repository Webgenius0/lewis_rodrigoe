import { z } from "zod";
//const ukMobileRegex = /^(?:\+44|0)7\d{9}$/;
export const updateUserSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length >= 10 && val.length <= 15, {
      message: "Phone number must be between 10 and 15 digits",
    }),

  gender: z.enum(["male", "femail", "other"], {
    required_error: "Gender is required",
  }),
  avatar: z.any({
    required_error: "Avatar is required",
  }),
});
