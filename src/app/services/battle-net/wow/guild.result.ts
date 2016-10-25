export interface GuildResult {
    lastModified: number;
    name: string;
    realm: string;
    battlegroup: string;
    level: number;
    side: number;
    achievementPoints: number;
    members?: GuildMember[];
}

export interface GuildMember {
    character: GuildMemberCharacter;
    rank: number;
}

export interface GuildMemberCharacter {
    name: string;
    realm: string;
    battlegroup: string;
    class: number;
    race: number;
    gender: number;
    level: number;
    achievementPoints: number;
    thumbnail: string;
    spec: GuildMemberSpec;
    guild: string;
    guildRealm: string;
    lastModified: number;
}

export interface GuildMemberSpec {
    name: string;
    role: string;
    backgroundImage: string;
    icon: string;
    description: string;
    order: number;
}