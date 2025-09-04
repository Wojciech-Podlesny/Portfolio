'use client';
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";
import {SectionHeading} from "@/components/SectionHeading";
import {useTranslations} from "next-intl";

export const  CallToAction = () => {
    const t = useTranslations("collaboration");
    return (
            <section className="w-full bg-white dark:bg-gray-900 p-12">
                <SectionHeading title={t("title")}/>
                <div className="max-w-3xl mx-auto flex flex-col justify-center items-center">
                    <p className="text-xl mb-8 text-black dark:text-gray-300 text-center">
                        {t("description")}
                    </p>
                    <div className="flex justify-center gap-6">

                        <Button asChild>
                            <Link href="/contact">{t("contact")}</Link>
                        </Button>


                        <Button asChild>
                            <Link href="/services">{t("services")}</Link>
                        </Button>
                    </div>
                </div>
                <div
                    className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent dark:via-white/10"></div>
            </section>
    )

}
