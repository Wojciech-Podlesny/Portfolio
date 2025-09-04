'use client';

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
import { SectionHeading } from "@/components/SectionHeading";
import { ContactFormData, contactFormSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { showErrorToast, showSuccessToast } from "@/components/ErrorToast";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useTranslations } from "next-intl";

export const Contact = () => {
    const t = useTranslations("contact");

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

    const handleFormSubmit =
        form.handleSubmit(async (data: ContactFormData) => {
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Server error:", errorData);
                    showErrorToast(t("toast.error"));
                    return;
                }

                showSuccessToast(t("toast.success"));
                form.reset();
            } catch (error) {
                console.error("Submission error:", error);
                showErrorToast(t("toast.fail"));
            }
        });

    return (
        <section
            id="contact"
            className="w-full py-24D bg-white dark:bg-gray-900
                       text-black dark:text-white"
        >
            <SectionHeading title={t("title")} />

            <TextAnimate
                as="p"
                className="px-12 text-2xl text-center text-gray-800 dark:text-gray-100"
            >
                {t("intro")}
            </TextAnimate>

            <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-900/50
                            border border-gray-200 dark:border-gray-700
                            backdrop-blur-md p-10 rounded-2xl shadow-xl mt-12"
            >
                <p className="text-center text-lg font-medium mb-8 text-gray-900 dark:text-white">
                    {t("subtitle")}
                </p>

                <Form<ContactFormData> {...form}>
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-1/2">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("form.firstName")}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
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
                                            <FormLabel>{t("form.lastName")}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("form.subject")}</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("form.email")}</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("form.message")}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            rows={6}
                                            placeholder={t("form.messagePlaceholder")}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="pt-4 flex justify-center">
                            <Button
                                aria-label={t("title")}
                                type="submit"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting
                                    ? t("form.sending")
                                    : t("form.send")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};
