import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ChampionBase } from "@/types/champion/ChampionBase";

const dataDragoUrl = process.env.NEXT_PUBLIC_DATADRAGON_URL;
const version = process.env.NEXT_PUBLIC_VERSION;
const imageUrl = `${dataDragoUrl}/${version}/img/champion`;

const revalidate = 60 * 60 * 24 * 7;

export const GET = async () => {
  let data = [] as ChampionBase[];
  let lastError = null;
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en_US";

  try {
    const res = await fetch(
      `${dataDragoUrl}/${version}/data/${lang}/champion.json`,
      { next: { revalidate } }
    );

    if (res.ok) {
      data = await res.json();
      data = Object.values(data.data).map((champion: any) => {
        return {
          key: champion.key,
          name: champion.name,
          title: champion.title,
          info: champion.info,
          splash: `${imageUrl}/splash/${champion.image.full}`,
          square: `${imageUrl}/${champion.image.full}`,
        };
      });
    } else {
      lastError = res.text();
    }
  } catch (error) {
    lastError = error;
  }

  if (data) return NextResponse.json(data, { status: 200 });

  return NextResponse.json(
    { error: "Failed to fetch champion list", lastError },
    { status: 500 }
  );
};
