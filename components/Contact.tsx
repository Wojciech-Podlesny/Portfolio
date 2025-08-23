'use client'

import React from "react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { showErrorToast, showSuccessToast } from "@/components/ErrorToast";
import {SectionHeading} from "@/components/SectionHeading";

const contactFormSchema = z.object({
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

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
        },
    });

    const handleFormSubmit = form.handleSubmit(async (data) => {
        try {
            console.log("Submitted data:", data);
            await new Promise((res) => setTimeout(res, 1500));
            form.reset();
            showSuccessToast("Message sent successfully!");
        } catch (err) {
            console.error("Submission error:", err);
            showErrorToast("Something went wrong");
        }
    });

    return (
        <section
            className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
            id="contact"
        >
           <SectionHeading title={"CONTACT"} />

            <h1 className="text-white p-12 text-2xl text-center">
                Have a project in mind? Let’s connect and build something great together!
            </h1>

            <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 backdrop-blur-md p-10 rounded-2xl shadow-xl">
                <h3 className="text-center text-lg font-medium mb-8 text-white">
                    Do You Have A Project? Let’s Talk.
                </h3>

                <Form<ContactFormData> {...form}>
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        {/* First + Last Name */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm text-white">First Name</FormLabel>
                                            <FormControl>
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                                    <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
                                                </motion.div>
                                            </FormControl>
                                            <AnimatePresence mode="wait">
                                                {form.formState.errors.firstName && (
                                                    <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                                                        {form.formState.errors.firstName.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm text-white">Last Name</FormLabel>
                                            <FormControl>
                                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                                                    <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
                                                </motion.div>
                                            </FormControl>
                                            <AnimatePresence mode="wait">
                                                {form.formState.errors.lastName && (
                                                    <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                                                        {form.formState.errors.lastName.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-white">Subject</FormLabel>
                                    <FormControl>
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                            <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
                                        </motion.div>
                                    </FormControl>
                                    <AnimatePresence mode="wait">
                                        {form.formState.errors.subject && (
                                            <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                                                {form.formState.errors.subject.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-white">Email Address</FormLabel>
                                    <FormControl>
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                            <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
                                        </motion.div>
                                    </FormControl>
                                    <AnimatePresence mode="wait">
                                        {form.formState.errors.email && (
                                            <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                                                {form.formState.errors.email.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </FormItem>
                            )}
                        />

                        {/* Message */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-white">Your Message</FormLabel>
                                    <FormControl>
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                            <Textarea
                                                rows={6}
                                                placeholder="Type your message here..."
                                                {...field}
                                                className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400"
                                            />
                                        </motion.div>
                                    </FormControl>
                                    <AnimatePresence mode="wait">
                                        {form.formState.errors.message && (
                                            <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
                                                {form.formState.errors.message.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </FormItem>
                            )}
                        />

                        {/* Submit */}
                        <div className="pt-4 flex justify-center items-center text-center">
                            <button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50"
                            >
                                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};
