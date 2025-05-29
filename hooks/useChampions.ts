import { useQuery } from "@tanstack/react-query";
import { getChampions } from "@/lib/api/champions";

export const useChampions = () => {
  return useQuery({
    queryKey: ["champions"],
    queryFn: getChampions,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
};
