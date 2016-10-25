export interface GuildTableData {
    name: string;
    realm: string;
    spec: string;
    icon: string;
    level: number;

    detailsLoading: boolean;
    detailsLoaded: boolean;

    avgItemLevel?: number;
    head?: GuildTableItem;
    neck?: GuildTableItem;
    shoulder?: GuildTableItem;
    back?: GuildTableItem;
    chest?: GuildTableItem;
    wrist?: GuildTableItem;
    hands?: GuildTableItem;
    waist?: GuildTableItem;
    legs?: GuildTableItem;
    feet?: GuildTableItem;
    finger1?: GuildTableItem;
    finger2?: GuildTableItem;
    trinket1?: GuildTableItem;
    trinket2?: GuildTableItem;
    mainHand?: GuildTableItem;
    offHand?: GuildTableItem;
}

export interface GuildTableItem {
    id: number;
    itemLevel: number;
}