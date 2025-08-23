// 'use client'
//
// import React from "react";
// import {
//     Form,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormControl,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion, AnimatePresence } from "framer-motion";
// import { showErrorToast, showSuccessToast } from "@/components/ErrorToast";
// import {SectionHeading} from "@/components/SectionHeading";
//
// const contactFormSchema = z.object({
//     firstName: z.string()
//         .trim()
//         .min(2, "Enter your first name")
//         .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid first name"),
//     lastName: z.string()
//         .trim()
//         .min(2, "Enter your last name")
//         .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid last name"),
//     subject: z.string()
//         .trim()
//         .min(3, "Enter a subject"),
//     email: z.string()
//         .trim()
//         .email("Invalid email address"),
//     message: z.string()
//         .trim()
//         .min(10, "Message must be at least 10 characters")
//         .max(1000, "Message must be under 1000 characters"),
// });
//
// type ContactFormData = z.infer<typeof contactFormSchema>;
//
// export const Contact = () => {
//     const form = useForm<ContactFormData>({
//         resolver: zodResolver(contactFormSchema),
//         defaultValues: {
//             firstName: "",
//             lastName: "",
//             subject: "",
//             email: "",
//             message: "",
//         },
//     });
//
//     const handleFormSubmit = form.handleSubmit(async (data) => {
//         try {
//             console.log("Submitted data:", data);
//             await new Promise((res) => setTimeout(res, 1500));
//             form.reset();
//             showSuccessToast("Message sent successfully!");
//         } catch (err) {
//             console.error("Submission error:", err);
//             showErrorToast("Something went wrong");
//         }
//     });
//
//     return (
//         <section
//             className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
//             id="contact"
//         >
//            <SectionHeading title={"CONTACT"} />
//
//             <h1 className="text-white p-12 text-2xl text-center">
//                 Have a project in mind? Let’s connect and build something great together!
//             </h1>
//
//             <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 backdrop-blur-md p-10 rounded-2xl shadow-xl">
//                 <h3 className="text-center text-lg font-medium mb-8 text-white">
//                     Do You Have A Project? Let’s Talk.
//                 </h3>
//
//                 <Form<ContactFormData> {...form}>
//                     <form className="space-y-6" onSubmit={handleFormSubmit}>
//                         {/* First + Last Name */}
//                         <div className="flex flex-col md:flex-row gap-6">
//                             <div className="w-full md:w-1/2">
//                                 <FormField
//                                     control={form.control}
//                                     name="firstName"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel className="text-sm text-white">First Name</FormLabel>
//                                             <FormControl>
//                                                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                                                     <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
//                                                 </motion.div>
//                                             </FormControl>
//                                             <AnimatePresence mode="wait">
//                                                 {form.formState.errors.firstName && (
//                                                     <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
//                                                         {form.formState.errors.firstName.message}
//                                                     </motion.p>
//                                                 )}
//                                             </AnimatePresence>
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//
//                             <div className="w-full md:w-1/2">
//                                 <FormField
//                                     control={form.control}
//                                     name="lastName"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel className="text-sm text-white">Last Name</FormLabel>
//                                             <FormControl>
//                                                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
//                                                     <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
//                                                 </motion.div>
//                                             </FormControl>
//                                             <AnimatePresence mode="wait">
//                                                 {form.formState.errors.lastName && (
//                                                     <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
//                                                         {form.formState.errors.lastName.message}
//                                                     </motion.p>
//                                                 )}
//                                             </AnimatePresence>
//                                         </FormItem>
//                                     )}
//                                 />
//                             </div>
//                         </div>
//
//                         {/* Subject */}
//                         <FormField
//                             control={form.control}
//                             name="subject"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel className="text-sm text-white">Subject</FormLabel>
//                                     <FormControl>
//                                         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                                             <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
//                                         </motion.div>
//                                     </FormControl>
//                                     <AnimatePresence mode="wait">
//                                         {form.formState.errors.subject && (
//                                             <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
//                                                 {form.formState.errors.subject.message}
//                                             </motion.p>
//                                         )}
//                                     </AnimatePresence>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Email */}
//                         <FormField
//                             control={form.control}
//                             name="email"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel className="text-sm text-white">Email Address</FormLabel>
//                                     <FormControl>
//                                         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                                             <Input {...field} className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400" />
//                                         </motion.div>
//                                     </FormControl>
//                                     <AnimatePresence mode="wait">
//                                         {form.formState.errors.email && (
//                                             <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
//                                                 {form.formState.errors.email.message}
//                                             </motion.p>
//                                         )}
//                                     </AnimatePresence>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Message */}
//                         <FormField
//                             control={form.control}
//                             name="message"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel className="text-sm text-white">Your Message</FormLabel>
//                                     <FormControl>
//                                         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//                                             <Textarea
//                                                 rows={6}
//                                                 placeholder="Type your message here..."
//                                                 {...field}
//                                                 className="bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400"
//                                             />
//                                         </motion.div>
//                                     </FormControl>
//                                     <AnimatePresence mode="wait">
//                                         {form.formState.errors.message && (
//                                             <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}>
//                                                 {form.formState.errors.message.message}
//                                             </motion.p>
//                                         )}
//                                     </AnimatePresence>
//                                 </FormItem>
//                             )}
//                         />
//
//                         {/* Submit */}
//                         <div className="pt-4 flex justify-center items-center text-center">
//                             <button
//                                 type="submit"
//                                 disabled={form.formState.isSubmitting}
//                                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50"
//                             >
//                                 {form.formState.isSubmitting ? "Sending..." : "Send Message"}
//                             </button>
//                         </div>
//                     </form>
//                 </Form>
//             </div>
//         </section>
//     );
// };
// "use client";
//
// import React from "react";
// import {
//     Form, FormField, FormItem, FormLabel, FormControl,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
// import { showErrorToast, showSuccessToast } from "@/components/ErrorToast";
// import { SectionHeading } from "@/components/SectionHeading";
// import clsx from "clsx";
//
// const contactFormSchema = z.object({
//     firstName: z.string().trim().min(2, "Enter your first name").regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid first name"),
//     lastName: z.string().trim().min(2, "Enter your last name").regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid last name"),
//     subject: z.string().trim().min(3, "Enter a subject"),
//     email: z.string().trim().email("Invalid email address"),
//     message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be under 1000 characters"),
//     company: z.string().max(0).optional(), // honeypot
// });
//
// type ContactFormData = z.infer<typeof contactFormSchema>;
//
// export const Contact = () => {
//     const shouldReduceMotion = useReducedMotion();
//
//     const form = useForm<ContactFormData>({
//         resolver: zodResolver(contactFormSchema),
//         defaultValues: { firstName: "", lastName: "", subject: "", email: "", message: "", company: "" },
//         mode: "onTouched",
//     });
//
//     const handleFormSubmit = form.handleSubmit(async (data) => {
//         try {
//             if (data.company) {
//                 showErrorToast("Submission blocked.");
//                 return;
//             }
//             await new Promise((res) => setTimeout(res, 1200));
//             form.reset();
//             showSuccessToast("Message sent successfully!");
//         } catch (err) {
//             console.error("Submission error:", err);
//             showErrorToast("Something went wrong");
//         }
//     });
//
//     const fieldAnim = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } };
//
//     return (
//         <section
//             id="contact"
//             role="region"
//             aria-labelledby="contact-heading"
//             className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-24 px-4"
//         >
//             <SectionHeading id="contact-heading" title="CONTACT" />
//
//             <h2 className="text-center text-xl sm:text-2xl md:text-3xl mt-4 mb-8 sm:mb-12 text-white/90">
//                 Have a project in mind? Let’s connect and build something great together!
//             </h2>
//
//             {/* live region for SR */}
//             <div aria-live="polite" className="sr-only">
//                 {form.formState.isSubmitting ? "Sending..." : ""}
//             </div>
//
//             <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl">
//                 <h3 className="text-center text-base sm:text-lg font-medium mb-6 sm:mb-8 text-white">
//                     Do You Have A Project? Let’s Talk.
//                 </h3>
//
//                 <Form<ContactFormData> {...form}>
//                     <form className="space-y-5 sm:space-y-6" onSubmit={handleFormSubmit} noValidate>
//                         {/* Honeypot */}
//                         <div className="hidden">
//                             <label htmlFor="company">Company</label>
//                             <input id="company" type="text" autoComplete="organization" {...form.register("company")} />
//                         </div>
//
//                         {/* First + Last Name */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                             <div>
//                                 <FormField
//                                     control={form.control}
//                                     name="firstName"
//                                     render={({ field }) => {
//                                         const error = form.formState.errors.firstName?.message;
//                                         const errId = "firstName-error";
//                                         return (
//                                             <FormItem>
//                                                 <FormLabel htmlFor="firstName" className="text-sm text-white">First Name</FormLabel>
//                                                 <FormControl>
//                                                     <motion.div {...fieldAnim} transition={{ duration: 0.2 }}>
//                                                         <Input
//                                                             id="firstName"
//                                                             autoComplete="given-name"
//                                                             inputMode="text"
//                                                             aria-invalid={!!error}
//                                                             aria-describedby={error ? errId : undefined}
//                                                             {...field}
//                                                             className={clsx(
//                                                                 "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
//                                                                 "text-base min-h-[44px]", // mobile-friendly
//                                                                 error && "border-red-500 focus:border-red-500 focus:ring-red-500"
//                                                             )}
//                                                             required
//                                                         />
//                                                     </motion.div>
//                                                 </FormControl>
//                                                 <AnimatePresence mode="wait">
//                                                     {error && (
//                                                         <motion.p
//                                                             id={errId}
//                                                             className="text-red-400 text-sm mt-1"
//                                                             initial={{ opacity: 0, y: -4 }}
//                                                             animate={{ opacity: 1, y: 0 }}
//                                                             exit={{ opacity: 0, y: -4 }}
//                                                             transition={{ duration: 0.15 }}
//                                                         >
//                                                             {error}
//                                                         </motion.p>
//                                                     )}
//                                                 </AnimatePresence>
//                                             </FormItem>
//                                         );
//                                     }}
//                                 />
//                             </div>
//
//                             <div>
//                                 <FormField
//                                     control={form.control}
//                                     name="lastName"
//                                     render={({ field }) => {
//                                         const error = form.formState.errors.lastName?.message;
//                                         const errId = "lastName-error";
//                                         return (
//                                             <FormItem>
//                                                 <FormLabel htmlFor="lastName" className="text-sm text-white">Last Name</FormLabel>
//                                                 <FormControl>
//                                                     <motion.div {...fieldAnim} transition={{ duration: 0.2, delay: 0.03 }}>
//                                                         <Input
//                                                             id="lastName"
//                                                             autoComplete="family-name"
//                                                             inputMode="text"
//                                                             aria-invalid={!!error}
//                                                             aria-describedby={error ? errId : undefined}
//                                                             {...field}
//                                                             className={clsx(
//                                                                 "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
//                                                                 "text-base min-h-[44px]",
//                                                                 error && "border-red-500 focus:border-red-500 focus:ring-red-500"
//                                                             )}
//                                                             required
//                                                         />
//                                                     </motion.div>
//                                                 </FormControl>
//                                                 <AnimatePresence mode="wait">
//                                                     {error && (
//                                                         <motion.p
//                                                             id={errId}
//                                                             className="text-red-400 text-sm mt-1"
//                                                             initial={{ opacity: 0, y: -4 }}
//                                                             animate={{ opacity: 1, y: 0 }}
//                                                             exit={{ opacity: 0, y: -4 }}
//                                                             transition={{ duration: 0.15 }}
//                                                         >
//                                                             {error}
//                                                         </motion.p>
//                                                     )}
//                                                 </AnimatePresence>
//                                             </FormItem>
//                                         );
//                                     }}
//                                 />
//                             </div>
//                         </div>
//
//                         {/* Subject */}
//                         <FormField
//                             control={form.control}
//                             name="subject"
//                             render={({ field }) => {
//                                 const error = form.formState.errors.subject?.message;
//                                 const errId = "subject-error";
//                                 return (
//                                     <FormItem>
//                                         <FormLabel htmlFor="subject" className="text-sm text-white">Subject</FormLabel>
//                                         <FormControl>
//                                             <motion.div {...fieldAnim} transition={{ duration: 0.2 }}>
//                                                 <Input
//                                                     id="subject"
//                                                     autoComplete="off"
//                                                     inputMode="text"
//                                                     aria-invalid={!!error}
//                                                     aria-describedby={error ? errId : undefined}
//                                                     {...field}
//                                                     className={clsx(
//                                                         "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
//                                                         "text-base min-h-[44px]",
//                                                         error && "border-red-500 focus:border-red-500 focus:ring-red-500"
//                                                     )}
//                                                     required
//                                                 />
//                                             </motion.div>
//                                         </FormControl>
//                                         <AnimatePresence mode="wait">
//                                             {error && (
//                                                 <motion.p
//                                                     id={errId}
//                                                     className="text-red-400 text-sm mt-1"
//                                                     initial={{ opacity: 0, y: -4 }}
//                                                     animate={{ opacity: 1, y: 0 }}
//                                                     exit={{ opacity: 0, y: -4 }}
//                                                     transition={{ duration: 0.15 }}
//                                                 >
//                                                     {error}
//                                                 </motion.p>
//                                             )}
//                                         </AnimatePresence>
//                                     </FormItem>
//                                 );
//                             }}
//                         />
//
//                         {/* Email */}
//                         <FormField
//                             control={form.control}
//                             name="email"
//                             render={({ field }) => {
//                                 const error = form.formState.errors.email?.message;
//                                 const errId = "email-error";
//                                 return (
//                                     <FormItem>
//                                         <FormLabel htmlFor="email" className="text-sm text-white">Email Address</FormLabel>
//                                         <FormControl>
//                                             <motion.div {...fieldAnim} transition={{ duration: 0.2 }}>
//                                                 <Input
//                                                     id="email"
//                                                     type="email"
//                                                     autoComplete="email"
//                                                     inputMode="email"
//                                                     aria-invalid={!!error}
//                                                     aria-describedby={error ? errId : undefined}
//                                                     {...field}
//                                                     className={clsx(
//                                                         "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
//                                                         "text-base min-h-[44px]",
//                                                         error && "border-red-500 focus:border-red-500 focus:ring-red-500"
//                                                     )}
//                                                     required
//                                                 />
//                                             </motion.div>
//                                         </FormControl>
//                                         <AnimatePresence mode="wait">
//                                             {error && (
//                                                 <motion.p
//                                                     id={errId}
//                                                     className="text-red-400 text-sm mt-1"
//                                                     initial={{ opacity: 0, y: -4 }}
//                                                     animate={{ opacity: 1, y: 0 }}
//                                                     exit={{ opacity: 0, y: -4 }}
//                                                     transition={{ duration: 0.15 }}
//                                                 >
//                                                     {error}
//                                                 </motion.p>
//                                             )}
//                                         </AnimatePresence>
//                                     </FormItem>
//                                 );
//                             }}
//                         />
//
//                         {/* Message */}
//                         <FormField
//                             control={form.control}
//                             name="message"
//                             render={({ field }) => {
//                                 const error = form.formState.errors.message?.message;
//                                 const errId = "message-error";
//                                 return (
//                                     <FormItem>
//                                         <FormLabel htmlFor="message" className="text-sm text-white">Your Message</FormLabel>
//                                         <FormControl>
//                                             <motion.div {...fieldAnim} transition={{ duration: 0.2 }}>
//                                                 <Textarea
//                                                     id="message"
//                                                     rows={5} // krócej na mobile
//                                                     placeholder="Type your message here..."
//                                                     autoComplete="off"
//                                                     aria-invalid={!!error}
//                                                     aria-describedby={error ? errId : undefined}
//                                                     {...field}
//                                                     className={clsx(
//                                                         "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
//                                                         "text-base",
//                                                         error && "border-red-500 focus:border-red-500 focus:ring-red-500"
//                                                     )}
//                                                     required
//                                                 />
//                                             </motion.div>
//                                         </FormControl>
//                                         <AnimatePresence mode="wait">
//                                             {error && (
//                                                 <motion.p
//                                                     id={errId}
//                                                     className="text-red-400 text-sm mt-1"
//                                                     initial={{ opacity: 0, y: -4 }}
//                                                     animate={{ opacity: 1, y: 0 }}
//                                                     exit={{ opacity: 0, y: -4 }}
//                                                     transition={{ duration: 0.15 }}
//                                                 >
//                                                     {error}
//                                                 </motion.p>
//                                             )}
//                                         </AnimatePresence>
//                                     </FormItem>
//                                 );
//                             }}
//                         />
//
//                         {/* Submit */}
//                         <div className="pt-2 sm:pt-4 flex justify-center">
//                             <button
//                                 type="submit"
//                                 disabled={form.formState.isSubmitting}
//                                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
//                             >
//                                 {form.formState.isSubmitting ? (
//                                     <>
//                                         <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
//                                         Sending...
//                                     </>
//                                 ) : (
//                                     "Send Message"
//                                 )}
//                             </button>
//                         </div>
//                     </form>
//                 </Form>
//             </div>
//         </section>
//     );
// };
"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReducedMotion } from "framer-motion";
import { Form } from "@/components/ui/form";
import { SectionHeading } from "@/components/SectionHeading";
import { showErrorToast, showSuccessToast } from "@/components/ErrorToast";
import { ContactField } from "@/components/ContactField";
import clsx from "clsx";

// --- Zod schema (możesz wynieść do /schemas/contactFormSchema.ts) ---
const contactFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "Enter your first name")
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid first name"),
    lastName: z
        .string()
        .trim()
        .min(2, "Enter your last name")
        .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Invalid last name"),
    subject: z.string().trim().min(3, "Enter a subject"),
    email: z.string().trim().email("Invalid email address"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be under 1000 characters"),
    // honeypot
    company: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// --- Component ---
export const Contact = () => {
    const shouldReduceMotion = useReducedMotion();

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
            company: "",
        },
        mode: "onTouched",
    });

    const onSubmit = form.handleSubmit(async (data) => {
        try {
            if (data.company) {
                // honeypot triggered
                showErrorToast("Submission blocked.");
                return;
            }
            // fake request
            await new Promise((res) => setTimeout(res, 1200));
            form.reset();
            showSuccessToast("Message sent successfully!");
        } catch (e) {
            console.error(e);
            showErrorToast("Something went wrong");
        }
    });

    return (
        <section
            id="contact"
            role="region"
            aria-labelledby="contact-heading"
            className="w-full text-white bg-gradient-to-br from-[#1b2140] via-[#171e2b] to-[#111723]  py-16 sm:py-24 px-4 space-y-6"
        >
            <SectionHeading id="contact-heading" title="CONTACT" />

            <h2 className="text-center text-xl sm:text-2xl md:text-3xl mt-4 mb-8 sm:mb-12 text-white/90">
                Have a project in mind? Let’s connect and build something great together!
            </h2>

            {/* Screen-reader live region */}
            <div aria-live="polite" className="sr-only">
                {form.formState.isSubmitting ? "Sending..." : ""}
            </div>

            <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl">
                <h3 className="text-center text-base sm:text-lg font-medium mb-6 sm:mb-8 text-white">
                    Do You Have A Project? Let’s Talk.
                </h3>

                <Form {...form}>
                    <form className="space-y-5 sm:space-y-6" onSubmit={onSubmit} noValidate>
                        {/* honeypot */}
                        <div className="hidden">
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                type="text"
                                autoComplete="organization"
                                {...form.register("company")}
                            />
                        </div>

                        {/* Names */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <ContactField
                                control={form.control}
                                name="firstName"
                                label="First Name"
                                autoComplete="given-name"
                                inputMode="text"
                                required
                            />
                            <ContactField
                                control={form.control}
                                name="lastName"
                                label="Last Name"
                                autoComplete="family-name"
                                inputMode="text"
                                required
                                delay={0.03}
                            />
                        </div>

                        {/* Subject */}
                        <ContactField
                            control={form.control}
                            name="subject"
                            label="Subject"
                            autoComplete="off"
                            inputMode="text"
                            required
                        />

                        {/* Email */}
                        <ContactField
                            control={form.control}
                            name="email"
                            label="Email Address"
                            as="input"
                            type="email"
                            autoComplete="email"
                            inputMode="email"
                            required
                        />

                        {/* Message */}
                        <ContactField
                            control={form.control}
                            name="message"
                            label="Your Message"
                            as="textarea"
                            rows={5}
                            placeholder="Type your message here..."
                            required
                        />

                        {/* Submit */}
                        <div className="pt-2 sm:pt-4 flex justify-center">
                            <button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                className={clsx(
                                    "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                                    "bg-indigo-600 hover:bg-indigo-700 text-white font-medium",
                                    "py-3 px-6 rounded-lg transition duration-300",
                                    "disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                )}
                            >
                                {form.formState.isSubmitting ? (
                                    <>
                                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                        </div>
                    </form>
                </Form>
            </div>

        </section>
    );
};
