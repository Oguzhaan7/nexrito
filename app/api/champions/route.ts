import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ChampionBase } from "@/types/champion/ChampionBase";

const dataDragoUrl = process.env.NEXT_PUBLIC_DATADRAGON_URL;
const version = process.env.NEXT_PUBLIC_VERSION;
const imageUrl = `${dataDragoUrl}/${version}/img/champion`;

const revalidate = 60 * 60 * 24 * 7;

interface RiotChampion {
  key: string;
  name: string;
  title: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
  image: { full: string };
}

export const GET = async () => {
  let data: ChampionBase[] = [];
  let lastError: unknown = null;
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en_US";

  try {
    const res = await fetch(
      `${dataDragoUrl}/${version}/data/${lang}/champion.json`,
      { next: { revalidate } }
    );

    if (res.ok) {
      const riotData: { data: Record<string, RiotChampion> } = await res.json();
      data = Object.values(riotData.data).map((champion) => ({
        key: champion.key,
        name: champion.name,
        title: champion.title,
        info: champion.info,
        splash: `${imageUrl}/splash/${champion.image.full}`,
        square: `${imageUrl}/${champion.image.full}`,
      }));
    } else {
      lastError = await res.text();
    }
  } catch (error) {
    lastError = error;
  }

  if (data.length > 0) return NextResponse.json(data, { status: 200 });

  return NextResponse.json(
    { error: "Failed to fetch champion list", lastError },
    { status: 500 }
  );
};
