import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ItemBase } from "@/types/item/ItemBase";

const dataDragoUrl = process.env.NEXT_PUBLIC_DATADRAGON_URL;
const version = process.env.NEXT_PUBLIC_VERSION;
const imageUrl = `${dataDragoUrl}/${version}/img/item`;

const revalidate = 60 * 60 * 24 * 7;

interface RiotItem {
  name: string;
  plaintext: string;
  gold: { base: number };
  tags: string[];
  image: { full: string };
}

export const GET = async () => {
  let data: ItemBase[] = [];
  let lastError: unknown = null;
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en_US";

  try {
    const res = await fetch(
      `${dataDragoUrl}/${version}/data/${lang}/item.json`,
      {
        next: { revalidate },
      }
    );

    if (res.ok) {
      const riotData: { data: Record<string, RiotItem> } = await res.json();
      data = Object.values(riotData.data).map((item) => ({
        name: item.name,
        plaintext: item.plaintext,
        gold: item.gold.base,
        tags: [item.tags[0] ?? ""], // Eğer ItemBase.tags: [string] ise, yoksa item.tags
        image: `${imageUrl}/${item.image.full}`,
      }));
    } else {
      lastError = await res.text();
    }
  } catch (error) {
    lastError = error;
  }

  if (data.length > 0) return NextResponse.json(data, { status: 200 });

  return NextResponse.json(
    { error: "Failed to fetch item list", lastError },
    { status: 500 }
  );
};
