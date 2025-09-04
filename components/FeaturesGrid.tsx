"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const FeaturesGrid = ({ features }: { features: string }) => {
    const t = useTranslations("projects");

    if (!features) return null;

    const items = t.raw(features) as string[];

    return (
        <section>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                {t("labels.keyFeatures")}
            </h3>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((feature, i) => (
                    <Card
                        key={i}
                        className="bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <CardHeader className="p-5 flex items-start gap-3">
                            <div
                                className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center shrink-0">
                                <CheckCircle className="text-emerald-500 dark:text-emerald-400"/>
                            </div>
                            <CardTitle className="text-gray-900 dark:text-white leading-relaxed break-words">
                                {feature}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}
