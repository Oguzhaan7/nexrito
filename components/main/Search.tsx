"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { useChampions } from "@/hooks/useChampions";
import { useItems } from "@/hooks/useItems";
import { useSummoner } from "@/hooks/useSummoner";
import { Gamepad, Trophy, BarChart2 } from "lucide-react";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const dataDragoUrl = process.env.NEXT_PUBLIC_DATADRAGON_URL;
  const version = process.env.NEXT_PUBLIC_VERSION;
  const imageUrl = `${dataDragoUrl}/${version}/img/profileicon/`;

  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [summonerName, setSummonerName] = useState<string | null>(null);

  const { data: champions } = useChampions();
  const { data: items } = useItems();

  const { data: summoner } = useSummoner(
    summonerName?.split("#")[0] || "",
    summonerName?.split("#")[1] || ""
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      )
        setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSummonerName(null);
  }, [filter]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filter.trim().length > 0) {
      setSummonerName(filter);
    }
  };

  const filteredChampions =
    filter && champions
      ? champions
          .filter((c) => c.name.toLocaleLowerCase().includes(filter))
          .slice(0, 10)
      : [];

  const filteredItems =
    filter && items
      ? items
          .filter((c) => c.name.toLocaleLowerCase().includes(filter))
          .slice(0, 10)
      : [];

  return (
    <div className="flex w-full justify-center py-4 lg:py-12 z-20 relative">
      <div
        ref={containerRef}
        className="flex flex-col gap-3 w-full max-w-8xl px-4"
      >
        <div className="flex w-full ">
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            ref={inputRef}
            className="h-14 bg-popover"
            placeholder={t("search_placeholder")}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div
          className={cn(
            "flex flex-col gap-2 w-full z-20 bg-popover min-h-64 max-h-96 overflow-y-auto rounded-lg border shadow-sm transition-all duration-150 ease-in-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
          )}
        >
          {summonerName && (
            <div className="flex flex-col gap-2">
              <h4 className="text-slate-400 px-2 py-2 border-b bg-background">
                {t("summoner")}
              </h4>
              <div className="px-2 py-1">
                {summoner?.id ? (
                  <div className="flex items-center gap-2 px-2 py-1 hover:bg-background cursor-pointer">
                    <Image
                      src={`${imageUrl}${summoner.profileIconId}.png`}
                      alt={summonerName}
                      width={36}
                      height={36}
                    />
                    <div className="flex flex-col ">
                      <span>{summonerName?.split("#")[0]}</span>
                      <span className="text-xs text-slate-400">
                        {summoner.summonerLevel}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-slate-500">{t("summoner_search")}</span>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {filteredChampions.length > 0 && (
              <h4 className="text-slate-400 px-2 py-2 border-b bg-background">
                {t("champions")}
              </h4>
            )}

            <ul>
              {filter &&
                filteredChampions.map((c) => {
                  return (
                    <li
                      className="flex items-center gap-2 px-2 py-1 hover:bg-background cursor-pointer"
                      key={c.key}
                    >
                      <Image
                        src={c.square}
                        alt={c.name}
                        width={36}
                        height={36}
                      />
                      {c.name}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            {filteredItems.length > 0 && (
              <h4 className="text-slate-400 px-2 py-2 border-b bg-background">
                {t("items")}
              </h4>
            )}

            <ul>
              {filter &&
                filteredItems.map((c) => {
                  return (
                    <li
                      className="flex items-center gap-2 px-2 py-1 hover:bg-background cursor-pointer"
                      key={c.image}
                    >
                      <Image
                        src={c.image}
                        alt={c.name}
                        width={36}
                        height={36}
                      />
                      {c.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="absolute z-10 top-40 w-full">
          <div className="flex flex-row items-center justify-evenly text-white">
            <div className="flex flex-col items-center gap-2">
              <Gamepad size={32} />
              <span className="font-bold text-lg">9456</span>
              <span className="text-xs">{t("stat_total_games")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Trophy size={32} />
              <span className="font-bold text-lg">Master</span>
              <span className="text-xs">{t("stat_highest_rank")}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BarChart2 size={32} />
              <span className="font-bold text-lg">4.45</span>
              <span className="text-xs">{t("stat_avg_kda")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
