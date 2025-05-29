import { ChampionBase } from "@/types/champion/ChampionBase";

export const getChampions = async (): Promise<ChampionBase[]> => {
  const res = await fetch("/api/champions");
  if (!res.ok) throw new Error();

  return res.json();
};
