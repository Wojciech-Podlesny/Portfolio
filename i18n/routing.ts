import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "pl"],
    defaultLocale: "en",

    pathnames: {
        "/": {
            en: "/",
            pl: "/",
        },
        "/about": {
            en: "/about",
            pl: "/o-mnie",
        },
        "/projects": {
            en: "/projects",
            pl: "/projekty",
        },
        "/projects/[slug]": {
            en: "/projects/[slug]",
            pl: "/projekty/[slug]",
        },
        "/services": {
            en: "/services",
            pl: "/uslugi",
        },
        "/contact": {
            en: "/contact",
            pl: "/kontakt",
        },

    },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
export type Href = Parameters<typeof Link>[0]["href"];