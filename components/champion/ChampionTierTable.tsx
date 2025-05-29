"use client";

import { useChampions } from "@/hooks/useChampions";
import { ChampionDataItem, RoleKey } from "@/types/champion/ChampionBase";
import Image from "next/image";

export const championData: Record<RoleKey, ChampionDataItem[]> = {
  TOP: [
    {
      rank: 1,
      champion: "Quinn",
      winrate: "58.33%",
      pickrate: "0.58%",
      banrate: "1.17%",
      weakAgainst: ["Malphite", "Nasus", "Ornn"],
    },
    {
      rank: 2,
      champion: "Kennen",
      winrate: "58.02%",
      pickrate: "0.98%",
      banrate: "1.51%",
      weakAgainst: ["Irelia", "Sion", "Yasuo"],
    },
    {
      rank: 3,
      champion: "Swain",
      winrate: "57.76%",
      pickrate: "0.65%",
      banrate: "0.54%",
      weakAgainst: ["Vayne", "Darius", "Garen"],
    },
    {
      rank: 4,
      champion: "Singed",
      winrate: "57.10%",
      pickrate: "1.02%",
      banrate: "0.83%",
      weakAgainst: ["Teemo", "Tryndamere", "Mordekaiser"],
    },
    {
      rank: 5,
      champion: "Teemo",
      winrate: "56.35%",
      pickrate: "2.14%",
      banrate: "2.47%",
      weakAgainst: ["Malphite", "Yorick", "Nasus"],
    },
    {
      rank: 6,
      champion: "Nasus",
      winrate: "56.20%",
      pickrate: "2.21%",
      banrate: "3.18%",
      weakAgainst: ["Quinn", "Camille", "Fiora"],
    },
    {
      rank: 7,
      champion: "Garen",
      winrate: "55.98%",
      pickrate: "3.03%",
      banrate: "1.90%",
      weakAgainst: ["Yorick", "Teemo", "Fiora"],
    },
    {
      rank: 8,
      champion: "Malphite",
      winrate: "55.60%",
      pickrate: "4.01%",
      banrate: "3.45%",
      weakAgainst: ["Vayne", "Trundle", "Camille"],
    },
    {
      rank: 9,
      champion: "Camille",
      winrate: "55.42%",
      pickrate: "2.22%",
      banrate: "2.29%",
      weakAgainst: ["Mordekaiser", "Malphite", "Nasus"],
    },
    {
      rank: 10,
      champion: "Fiora",
      winrate: "55.11%",
      pickrate: "2.80%",
      banrate: "3.60%",
      weakAgainst: ["Teemo", "Malphite", "Yorick"],
    },
  ],
  JUNGLE: [
    {
      rank: 1,
      champion: "Bel'Veth",
      winrate: "55.91%",
      pickrate: "1.65%",
      banrate: "3.06%",
      weakAgainst: ["Udyr", "Nunu", "Rammus"],
    },
    {
      rank: 2,
      champion: "Warwick",
      winrate: "55.42%",
      pickrate: "5.13%",
      banrate: "2.80%",
      weakAgainst: ["Sejuani", "Rammus", "Dr. Mundo"],
    },
    {
      rank: 3,
      champion: "Rammus",
      winrate: "54.88%",
      pickrate: "2.44%",
      banrate: "4.01%",
      weakAgainst: ["Kayle", "Lillia", "Kindred"],
    },
    {
      rank: 4,
      champion: "Udyr",
      winrate: "54.80%",
      pickrate: "1.90%",
      banrate: "2.76%",
      weakAgainst: ["Amumu", "Shyvana", "Volibear"],
    },
    {
      rank: 5,
      champion: "Kha'Zix",
      winrate: "54.73%",
      pickrate: "3.02%",
      banrate: "3.42%",
      weakAgainst: ["Elise", "Warwick", "Vi"],
    },
    {
      rank: 6,
      champion: "Volibear",
      winrate: "54.61%",
      pickrate: "1.95%",
      banrate: "2.66%",
      weakAgainst: ["Kayn", "Kindred", "Shaco"],
    },
    {
      rank: 7,
      champion: "Amumu",
      winrate: "54.36%",
      pickrate: "2.60%",
      banrate: "2.15%",
      weakAgainst: ["Udyr", "Zac", "Fizz"],
    },
    {
      rank: 8,
      champion: "Fiddlesticks",
      winrate: "54.14%",
      pickrate: "1.24%",
      banrate: "1.13%",
      weakAgainst: ["Nocturne", "Zac", "Xin Zhao"],
    },
    {
      rank: 9,
      champion: "Zac",
      winrate: "54.07%",
      pickrate: "1.18%",
      banrate: "1.29%",
      weakAgainst: ["Warwick", "Olaf", "Rammus"],
    },
    {
      rank: 10,
      champion: "Nunu",
      winrate: "53.99%",
      pickrate: "1.43%",
      banrate: "1.11%",
      weakAgainst: ["Elise", "Volibear", "Vi"],
    },
  ],
  MID: [
    {
      rank: 1,
      champion: "Vel'Koz",
      winrate: "56.44%",
      pickrate: "1.07%",
      banrate: "0.63%",
      weakAgainst: ["Ekko", "Fizz", "Kassadin"],
    },
    {
      rank: 2,
      champion: "Malzahar",
      winrate: "56.31%",
      pickrate: "2.42%",
      banrate: "1.39%",
      weakAgainst: ["Yasuo", "Vex", "Ekko"],
    },
    {
      rank: 3,
      champion: "Kassadin",
      winrate: "56.09%",
      pickrate: "2.23%",
      banrate: "2.27%",
      weakAgainst: ["Talon", "Fizz", "Qiyana"],
    },
    {
      rank: 4,
      champion: "Vex",
      winrate: "55.87%",
      pickrate: "2.18%",
      banrate: "0.97%",
      weakAgainst: ["LeBlanc", "Zed", "Fizz"],
    },
    {
      rank: 5,
      champion: "Talon",
      winrate: "55.66%",
      pickrate: "2.07%",
      banrate: "1.70%",
      weakAgainst: ["Katarina", "Ahri", "Ekko"],
    },
    {
      rank: 6,
      champion: "Fizz",
      winrate: "55.49%",
      pickrate: "2.79%",
      banrate: "3.60%",
      weakAgainst: ["Swain", "Kassadin", "Anivia"],
    },
    {
      rank: 7,
      champion: "Ekko",
      winrate: "55.44%",
      pickrate: "2.15%",
      banrate: "1.77%",
      weakAgainst: ["Vex", "Syndra", "LeBlanc"],
    },
    {
      rank: 8,
      champion: "Qiyana",
      winrate: "54.90%",
      pickrate: "1.41%",
      banrate: "2.08%",
      weakAgainst: ["Kassadin", "Ahri", "Swain"],
    },
    {
      rank: 9,
      champion: "Swain",
      winrate: "54.73%",
      pickrate: "1.33%",
      banrate: "0.90%",
      weakAgainst: ["Syndra", "Viktor", "Fizz"],
    },
    {
      rank: 10,
      champion: "Ahri",
      winrate: "54.66%",
      pickrate: "4.01%",
      banrate: "3.45%",
      weakAgainst: ["Talon", "Fizz", "Ekko"],
    },
  ],
  ADC: [
    {
      rank: 1,
      champion: "Jhin",
      winrate: "54.00%",
      pickrate: "15.00%",
      banrate: "2.00%",
      weakAgainst: ["Caitlyn", "Draven", "Zeri"],
    },
    {
      rank: 2,
      champion: "Ashe",
      winrate: "53.70%",
      pickrate: "13.87%",
      banrate: "1.80%",
      weakAgainst: ["Samira", "Ezreal", "Nilah"],
    },
    {
      rank: 3,
      champion: "Samira",
      winrate: "53.50%",
      pickrate: "12.41%",
      banrate: "2.30%",
      weakAgainst: ["Jinx", "Sivir", "Vayne"],
    },
    {
      rank: 4,
      champion: "Ezreal",
      winrate: "53.35%",
      pickrate: "12.20%",
      banrate: "1.60%",
      weakAgainst: ["Aphelios", "Draven", "Samira"],
    },
    {
      rank: 5,
      champion: "Vayne",
      winrate: "53.10%",
      pickrate: "11.88%",
      banrate: "2.10%",
      weakAgainst: ["Caitlyn", "Jinx", "Kog'Maw"],
    },
    {
      rank: 6,
      champion: "Jinx",
      winrate: "52.95%",
      pickrate: "11.39%",
      banrate: "1.90%",
      weakAgainst: ["Draven", "Zeri", "Sivir"],
    },
    {
      rank: 7,
      champion: "Sivir",
      winrate: "52.80%",
      pickrate: "10.77%",
      banrate: "1.70%",
      weakAgainst: ["Samira", "Aphelios", "Vayne"],
    },
    {
      rank: 8,
      champion: "Draven",
      winrate: "52.65%",
      pickrate: "10.31%",
      banrate: "2.30%",
      weakAgainst: ["Ezreal", "Samira", "Jinx"],
    },
    {
      rank: 9,
      champion: "Zeri",
      winrate: "52.50%",
      pickrate: "9.72%",
      banrate: "1.60%",
      weakAgainst: ["Jinx", "Vayne", "Aphelios"],
    },
    {
      rank: 10,
      champion: "Aphelios",
      winrate: "52.35%",
      pickrate: "9.11%",
      banrate: "1.50%",
      weakAgainst: ["Sivir", "Jhin", "Ashe"],
    },
  ],
  SUPPORT: [
    {
      rank: 1,
      champion: "Zyra",
      winrate: "57.14%",
      pickrate: "0.80%",
      banrate: "1.58%",
      weakAgainst: ["Blitzcrank", "Thresh", "Leona"],
    },
    {
      rank: 2,
      champion: "Blitzcrank",
      winrate: "56.89%",
      pickrate: "4.20%",
      banrate: "4.80%",
      weakAgainst: ["Nautilus", "Leona", "Pyke"],
    },
    {
      rank: 3,
      champion: "Thresh",
      winrate: "56.70%",
      pickrate: "8.90%",
      banrate: "5.20%",
      weakAgainst: ["Morgana", "Nami", "Zyra"],
    },
    {
      rank: 4,
      champion: "Leona",
      winrate: "56.50%",
      pickrate: "5.60%",
      banrate: "4.00%",
      weakAgainst: ["Janna", "Karma", "Lulu"],
    },
    {
      rank: 5,
      champion: "Nautilus",
      winrate: "56.20%",
      pickrate: "4.50%",
      banrate: "2.80%",
      weakAgainst: ["Morgana", "Rell", "Brand"],
    },
    {
      rank: 6,
      champion: "Morgana",
      winrate: "55.89%",
      pickrate: "6.50%",
      banrate: "2.90%",
      weakAgainst: ["Pyke", "Nautilus", "Zyra"],
    },
    {
      rank: 7,
      champion: "Pyke",
      winrate: "55.68%",
      pickrate: "6.10%",
      banrate: "3.00%",
      weakAgainst: ["Leona", "Thresh", "Janna"],
    },
    {
      rank: 8,
      champion: "Janna",
      winrate: "55.50%",
      pickrate: "3.70%",
      banrate: "1.20%",
      weakAgainst: ["Zyra", "Nautilus", "Blitzcrank"],
    },
    {
      rank: 9,
      champion: "Karma",
      winrate: "55.31%",
      pickrate: "4.00%",
      banrate: "1.50%",
      weakAgainst: ["Pyke", "Leona", "Thresh"],
    },
    {
      rank: 10,
      champion: "Nami",
      winrate: "55.11%",
      pickrate: "3.90%",
      banrate: "1.30%",
      weakAgainst: ["Morgana", "Brand", "Nautilus"],
    },
  ],
};

const getChampionObj = (
  champions: { name: string; square: string }[] | undefined,
  name: string
) => {
  return champions?.find((c) => c.name.toLowerCase() === name.toLowerCase());
};

type ChampionTierTableProps = {
  role?: RoleKey | "ALL";
  championsList?: ChampionDataItem[];
  showRole?: boolean;
  t: (key: string) => string;
};

const ChampionTierTable = ({
  role = "TOP",
  championsList,
  showRole = false,
  t,
}: ChampionTierTableProps) => {
  const { data: champions, isLoading } = useChampions();
  const data: ChampionDataItem[] =
    championsList ?? (role !== "ALL" ? championData[role as RoleKey] : []);

  if (isLoading || !champions) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="inline-block w-8 h-8 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg my-6 bg-popover">
      <table className="min-w-full text-sm text-white">
        <thead className="bg-popover border-b">
          <tr>
            {showRole && (
              <th className="py-2 px-3 text-left font-semibold">
                {t("table_role")}
              </th>
            )}
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_rank")}
            </th>
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_champion")}
            </th>
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_winrate")}
            </th>
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_pickrate")}
            </th>
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_banrate")}
            </th>
            <th className="py-2 px-3 text-left font-semibold">
              {t("table_weak_against")}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((champ) => {
            const champObj = getChampionObj(champions, champ.champion);
            return (
              <tr
                key={`${champ.role ?? role}-${champ.rank}`}
                className="bg-popover"
              >
                {showRole && (
                  <td className="py-2 px-3">
                    {champ.role ? t(`tab_${champ.role.toLowerCase()}`) : ""}
                  </td>
                )}
                <td className="py-2 px-3">{champ.rank}</td>
                <td className="py-2 px-3 flex items-center gap-2">
                  {champObj && (
                    <Image
                      src={champObj.square}
                      alt={champObj.name}
                      width={28}
                      height={28}
                      className="rounded"
                    />
                  )}
                  <span>{champ.champion}</span>
                </td>
                <td className="py-2 px-3">{champ.winrate}</td>
                <td className="py-2 px-3">{champ.pickrate}</td>
                <td className="py-2 px-3">{champ.banrate}</td>
                <td className="py-2 px-3 flex flex-wrap gap-2">
                  {champ.weakAgainst.map((wa) => {
                    const waObj = getChampionObj(champions, wa);
                    return (
                      <span
                        key={wa}
                        className="flex items-center gap-1 bg-black/20 rounded px-2 py-1"
                      >
                        {waObj && (
                          <Image
                            src={waObj.square}
                            alt={waObj.name}
                            width={20}
                            height={20}
                            className="rounded"
                          />
                        )}
                        <span>{wa}</span>
                      </span>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionTierTable;
