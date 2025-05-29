"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ChampionTierTable, {
  championData,
} from "@/components/champion/ChampionTierTable";
import { ChampionDataItem, RoleKey } from "@/types/champion/ChampionBase";
import { useTranslation } from "@/hooks/useTranslation";

const ROLES: { value: RoleKey | "ALL"; labelKey: string }[] = [
  { value: "TOP", labelKey: "tab_top" },
  { value: "JUNGLE", labelKey: "tab_jungle" },
  { value: "MID", labelKey: "tab_mid" },
  { value: "ADC", labelKey: "tab_adc" },
  { value: "SUPPORT", labelKey: "tab_support" },
  { value: "ALL", labelKey: "tab_all" },
];

const getAllChampionsList = (): ChampionDataItem[] => {
  return ROLES.filter((r) => r.value !== "ALL").flatMap((r) =>
    (championData[r.value as RoleKey] || []).map((champ) => ({
      ...champ,
      role: r.value,
    }))
  );
};

const ChampionTierTabs = () => {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="TOP" className="w-full">
      <TabsList className="w-full flex justify-center mb-4">
        {ROLES.map((role) => (
          <TabsTrigger
            key={role.value}
            value={role.value}
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {t(role.labelKey)}
          </TabsTrigger>
        ))}
      </TabsList>
      {ROLES.map((role) => (
        <TabsContent key={role.value} value={role.value}>
          {role.value === "ALL" ? (
            <ChampionTierTable
              role="ALL"
              championsList={getAllChampionsList()}
              showRole
              t={t}
            />
          ) : (
            <ChampionTierTable role={role.value as RoleKey} t={t} />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ChampionTierTabs;
