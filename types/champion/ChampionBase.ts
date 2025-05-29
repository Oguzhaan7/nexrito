export type ChampionBase = {
  key: string;
  name: string;
  title: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  splash: string;
  square: string;
};

export type RoleKey = "TOP" | "JUNGLE" | "MID" | "ADC" | "SUPPORT";

export type ChampionDataItem = {
  rank: number;
  champion: string;
  winrate: string;
  pickrate: string;
  banrate: string;
  weakAgainst: string[];
  role?: string;
};
