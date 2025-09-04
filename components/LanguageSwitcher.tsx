'use client'

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export const LanguageSwitcher = () => {
    const activeLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams<{ slug?: string }>();

    const handleChangeSwitcher = (newLocale: (typeof routing.locales)[number]) => {
        if (pathname === "/projects/[slug]") {
            router.replace(
                { pathname, params: { slug: String(params.slug) } },
                { locale: newLocale }
            );
        } else {
            router.replace(pathname, { locale: newLocale });
        }
    };

    return (
        <div className="flex">
            {routing.locales.map((current) => (
                <Button
                    className="rounded-none"
                    key={current}
                    variant={current === activeLocale ? "default" : "outline"}
                    onClick={() => handleChangeSwitcher(current)}
                >
                    {current.toUpperCase()}
                </Button>
            ))}
        </div>
    );
};
