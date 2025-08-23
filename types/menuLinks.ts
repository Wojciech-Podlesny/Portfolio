export type NavItem = {
    id: number;
    name: string;
    route: string;
    children?: NavItem[];
};
