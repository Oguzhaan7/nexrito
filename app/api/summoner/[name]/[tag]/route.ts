import { SummonerBase } from "@/types/summoner/SummonerBase";
import { NextRequest, NextResponse } from "next/server";

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const RIOT_REGION = process.env.RIOT_REGION || "europe";
const BASE_URL = process.env.BASE_URL;

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ name: string; tag: string }> }
) => {
  let puuid;

  const { name, tag } = await params;

  if (!name || !tag)
    return NextResponse.json({ error: "Missing name or tag", status: 400 });

  try {
    const resRiotId = await fetch(
      `https://${RIOT_REGION}.${BASE_URL}/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(
        name
      )}/${encodeURIComponent(tag)}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY ?? "",
        },
      }
    );

    if (!resRiotId.ok) {
      const errorText = await resRiotId.text();
      return NextResponse.json(
        { error: "Summoner not found", details: errorText },
        { status: resRiotId.status }
      );
    }

    const data = await resRiotId.json();
    puuid = data.puuid;

    const resProfile = await fetch(
      `https://tr1.${BASE_URL}/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY ?? "",
        },
      }
    );

    if (!resProfile.ok) {
      const errorText = await resProfile.text();
      return NextResponse.json(
        { error: "Profile not found", details: errorText },
        { status: resProfile.status }
      );
    }

    const profileData = await resProfile.json();
    return NextResponse.json(profileData as SummonerBase, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
};
