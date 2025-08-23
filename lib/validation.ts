import {z} from "zod";

export const contactFormSchema = z.object({
    firstName: z.string()
        .trim()
        .min(2, "Enter your first name")
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid first name"),
    lastName: z.string()
        .trim()
        .min(2, "Enter your last name")
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid last name"),
    subject: z.string()
        .trim()
        .min(3, "Enter a subject"),
    email: z.string()
        .trim()
        .email("Invalid email address"),
    message: z.string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;