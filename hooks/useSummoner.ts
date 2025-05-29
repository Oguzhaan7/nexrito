import { useQuery } from "@tanstack/react-query";
import { getSummoner } from "@/lib/api/summoner";

export const useSummoner = (name: string, tag: string) => {
  return useQuery({
    queryKey: ["summoner", name, tag],
    queryFn: () => getSummoner(name, tag),
    enabled: !!name && !!tag,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
};
