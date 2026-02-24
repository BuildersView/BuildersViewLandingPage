"use server";

import { contactFormSchema } from "@/lib/validations/contact";
import { getDb } from "@/lib/db";
import type { ActionResult } from "@/lib/types";

export async function submitContactForm(data: unknown): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "נתונים לא תקינים" };
  }

  const sql = getDb();

  try {
    await sql`
      INSERT INTO contact_submissions (name, phone, email, idea)
      VALUES (${parsed.data.name}, ${parsed.data.phone}, ${parsed.data.email}, ${parsed.data.idea})
    `;
    return { success: true };
  } catch (err) {
    console.error("Database insert error:", err);
    return { success: false, error: "אירעה שגיאה. נסו שוב מאוחר יותר." };
  }
}
