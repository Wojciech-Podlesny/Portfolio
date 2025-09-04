import { type Href } from "@/i18n/routing";

export type NavItem = {
    id: number;
    key: string;
    route: Href;
};

export const menuLinks: NavItem[] = [
    { id: 1, key: "home",     route: "/" },
    { id: 2, key: "about",    route: "/about" },
    { id: 3, key: "projects", route: "/projects" },
    { id: 4, key: "services", route: "/services" },
    { id: 5, key: "contact",  route: "/contact" }
] as const;
