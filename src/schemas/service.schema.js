import { z } from "zod";

export const propertySchema = z.object({
  label: z.string().min(1, "Label is required"),
  street: z.string().min(1, "Street is required"),
  apartment: z.string().min(1, "Apartment is required"),

  country_id: z.coerce.number({ invalid_type_error: "Country is required" }),
  state_id: z.coerce.number({ invalid_type_error: "State is required" }),
  city_id: z.coerce.number({ invalid_type_error: "City is required" }),
  zip_id: z.coerce.number({ invalid_type_error: "Zip is required" }),

  latitude: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : null))
    .refine((val) => val === null || !isNaN(val), {
      message: "Latitude must be a number",
    }),

  longitude: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : null))
    .refine((val) => val === null || !isNaN(val), {
      message: "Longitude must be a number",
    }),

  boiler_type_id: z.coerce.number({
    invalid_type_error: "Boiler type is required",
  }),
  boiler_model_id: z.coerce.number({
    invalid_type_error: "Boiler model is required",
  }),
  property_type_id: z.coerce.number({
    invalid_type_error: "Property type is required",
  }),
  service_id: z.coerce.number({ invalid_type_error: "Service is required" }),

  quantity: z.coerce.number({ invalid_type_error: "Quantity is required" }),
  purchase_year: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }), // e.g., "2021-05"
  last_service_date: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }), // e.g., "2024-12-31"
  price: z.coerce.number({
    invalid_type_error: "price is required",
  }),

  location: z.string(),
  accessability_info: z.string(),
});
