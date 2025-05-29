import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/api/items";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
    staleTime: 1000 * 60 * 60 * 24 * 7,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
};
