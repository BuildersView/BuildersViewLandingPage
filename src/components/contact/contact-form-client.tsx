"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitContactForm(data);
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        setServerError(result.error);
      }
    });
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="text-center py-16"
        >
          <div className="text-4xl mb-4">✓</div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
            הפרטים התקבלו!
          </h3>
          <p className="text-text-secondary mb-6">
            נחזור אליך בהקדם האפשרי.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="border-border text-text-secondary hover:text-foreground hover:border-copper/40"
          >
            שליחת הודעה נוספת
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm text-text-secondary">
              שם מלא
            </Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="השם שלך"
              className={cn(
                "bg-surface border-border text-foreground placeholder:text-muted-foreground",
                errors.name && "border-destructive"
              )}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm text-text-secondary">
              טלפון
            </Label>
            <Input
              id="phone"
              type="tel"
              dir="ltr"
              {...register("phone")}
              placeholder="050-0000000"
              className={cn(
                "bg-surface border-border text-foreground placeholder:text-muted-foreground text-start",
                errors.phone && "border-destructive"
              )}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-text-secondary">
              אימייל
            </Label>
            <Input
              id="email"
              type="email"
              dir="ltr"
              {...register("email")}
              placeholder="you@example.com"
              className={cn(
                "bg-surface border-border text-foreground placeholder:text-muted-foreground text-start",
                errors.email && "border-destructive"
              )}
            />
            {errors.email && (
              <p className="text-xs text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Idea */}
          <div className="space-y-2">
            <Label htmlFor="idea" className="text-sm text-text-secondary">
              ספרו לנו על הרעיון
            </Label>
            <Textarea
              id="idea"
              {...register("idea")}
              placeholder="תארו בקצרה את הרעיון, הצורך, או הבעיה שאתם רוצים לפתור..."
              rows={5}
              className={cn(
                "bg-surface border-border text-foreground placeholder:text-muted-foreground resize-none",
                errors.idea && "border-destructive"
              )}
            />
            {errors.idea && (
              <p className="text-xs text-destructive">{errors.idea.message}</p>
            )}
          </div>

          {serverError && (
            <p className="text-sm text-destructive text-center">
              {serverError}
            </p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary text-primary-foreground hover:bg-copper-hover py-6 text-base font-medium rounded-md"
          >
            {isPending ? "שולח..." : "שלחו פרטים"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
