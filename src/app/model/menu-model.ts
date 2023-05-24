

export interface MenuModel {
    parentMenuNme: string,
    icon: string,
    routerLink?: string;
    children: MenuItemModel[]
}
export interface MenuItemModel {
    menuName: string,
    icon: string,
    routerLink: string;
}

