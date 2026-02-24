import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "נא להזין שם מלא")
    .max(100, "השם ארוך מדי"),
  phone: z
    .string()
    .regex(/^0\d{1,2}-?\d{7,8}$/, "מספר טלפון לא תקין"),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה"),
  idea: z
    .string()
    .min(10, "נא לתאר את הרעיון בקצרה (לפחות 10 תווים)")
    .max(2000, "התיאור ארוך מדי"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
