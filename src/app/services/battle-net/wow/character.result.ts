export interface CharacterResult {
    lastModified: number;
    name: string;
    realm: string;
    battlegroup: string;
    class: number;
    race: number;
    gender: number;
    level: number;
    achievementPoints: number;
    thumbnail: string;
    calcClass: string;
    faction: number;
    totalHonorableKills: number;
    items: CharacterItems;
}

export interface CharacterItems {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    head: CharacterItem;
    neck: CharacterItem;
    shoulder: CharacterItem;
    back: CharacterItem;
    chest: CharacterItem;
    wrist: CharacterItem;
    hands: CharacterItem;
    waist: CharacterItem;
    legs: CharacterItem;
    feet: CharacterItem;
    finger1: CharacterItem;
    finger2: CharacterItem;
    trinket1: CharacterItem;
    trinket2: CharacterItem;
    mainHand: CharacterItem;
    offHand: CharacterItem;
}

export interface CharacterItem {
    id: number;
    name: string;
    icon: string;
    quality: number;
    itemLevel: number;
    tooltipParams: CharacterTooltipParams;
    stats: CharacterStat[];
    armor: number;
    weaponInfo?: CharacterWeaponInfo;
    context: string;
    bonusLists: number[];
    artifactId: number;
    displayInfoId: number;
    artifactAppearanceId: number;
    artifactTraits: CharacterArtifactTrait[];
    relics: CharacterArtifactRelic[];
    appearance: CharacterAppearance;
}

export interface CharacterTooltipParams {
    timewalkerLevel: number;
    gem0: number;
    gem1: number;
}

export interface CharacterStat {
    stat: number;
    amount: number;
}

export interface CharacterWeaponInfo {
    damage: CharacterWeaponDamage;
    weaponSpeed: number;
    dps: number;
}

export interface CharacterWeaponDamage {
    min: number;
    max: number;
    exactMin: number;
    exactMax: number;
}

export interface CharacterArtifactTrait {
    id: number;
    rank: number;
}

export interface CharacterArtifactRelic {
    socket: number;
    itemId: number;
    context: number;
    bonusLists: number[];
}

export interface CharacterAppearance {
    itemAppearanceModId: number;
}