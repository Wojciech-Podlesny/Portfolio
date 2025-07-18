export type NavItem = {
    id: number;
    name: string;
    route: string;
    children?: NavItem[];
};

export type Props = {
    item: NavItem;
}