"use client";
import { useChampions } from "@/hooks/useChampions";
import Image from "next/image";

const ChampionList = () => {
  const { data, isLoading } = useChampions();

  if (isLoading) return <>Loading...</>;
  if (!data) return null;

  return (
    <ul>
      {
        data.map((c) => {
          return (
            <li key={c.key}>
              {c.title}
              <Image src={c.square} alt={c.name} width={120} height={120} />
            </li>
          );
        })[0]
      }
    </ul>
  );
};

export default ChampionList;
