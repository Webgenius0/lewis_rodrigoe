import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  subjects: z.string().min(1, "Subjects is required"),
  message: z.string().min(1, "Message is required"),
});
