import { SummonerBase } from "@/types/summoner/SummonerBase";

export const getSummoner = async (
  name: string,
  tag: string
): Promise<SummonerBase> => {
  const res = await fetch(
    "/api/summoner/" + encodeURIComponent(name) + "/" + encodeURIComponent(tag)
  );

  if (!res.ok) throw new Error();

  return res.json();
};
