import { ItemBase } from "@/types/item/ItemBase";

export const getItems = async (): Promise<ItemBase[]> => {
  const res = await fetch("/api/items");
  if (!res.ok) throw new Error();

  return res.json();
};
