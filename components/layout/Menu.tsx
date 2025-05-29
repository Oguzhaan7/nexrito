"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/components/providers/LanguageProvider";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lang } from "@/types/common/Lang";

const analysisMenu: {
  titleKey: string;
  href: string;
  descriptionKey: string;
}[] = [
  {
    titleKey: "champions",
    href: "/champions",
    descriptionKey: "champions_description",
  },
  {
    titleKey: "matches",
    href: "/matches",
    descriptionKey: "matches_description",
  },
  {
    titleKey: "team_analysis",
    href: "/team-analysis",
    descriptionKey: "team_analysis_description",
  },
  {
    titleKey: "leaderboard",
    href: "/leaderboard",
    descriptionKey: "leaderboard_description",
  },
  {
    titleKey: "settings",
    href: "/settings",
    descriptionKey: "settings_description",
  },
];

const aboutMenu: { titleKey: string; href: string; descriptionKey: string }[] =
  [
    {
      titleKey: "about_app",
      href: "/about/app",
      descriptionKey: "about_app_description",
    },
    {
      titleKey: "changelog",
      href: "/about/changelog",
      descriptionKey: "changelog_description",
    },
    {
      titleKey: "faq",
      href: "/about/faq",
      descriptionKey: "faq_description",
    },
    {
      titleKey: "support",
      href: "/about/support",
      descriptionKey: "support_description",
    },
    {
      titleKey: "contact",
      href: "/about/contact",
      descriptionKey: "contact_description",
    },
    {
      titleKey: "privacy_policy",
      href: "/about/privacy-policy",
      descriptionKey: "privacy_policy_description",
    },
    {
      titleKey: "terms_of_service",
      href: "/about/terms-of-service",
      descriptionKey: "terms_of_service_description",
    },
  ];

const languageKeys: Lang[] = ["en_US", "tr_TR", "de_DE", "es_ES", "fr_FR"];

export const HeaderMenu = () => {
  const { t } = useTranslation();
  const { lang, setLang, locale } = useLanguage();
  return (
    <div className="z-30">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("profile")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] 2xl:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <div className="flex h-full w-full select-none flex-col items-center justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6">
                    <Image
                      src="/images/avatar.png"
                      alt="Profile Avatar"
                      width={96}
                      height={96}
                      className="rounded-full mb-2"
                    />
                    <div className="mb-2 mt-2 text-lg font-medium">
                      {t("summoner_name")}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-center">
                      {t("profile_description")}
                    </p>
                  </div>
                </li>
                <ListItem title={t("profile_stats")}>
                  {t("profile_stats_description")}
                </ListItem>
                <ListItem title={t("match_history")}>
                  {t("match_history_description")}
                </ListItem>
                <ListItem title={t("favorite_champions")}>
                  {t("favorite_champions_description")}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("analysis")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] 2xl:w-[500px] lg:grid-cols-2 ">
                {analysisMenu.map((item) => (
                  <ListItem key={item.titleKey} title={t(item.titleKey)}>
                    {t(item.descriptionKey)}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{t("about")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] 2xl:w-[500px] lg:grid-cols-2 ">
                {aboutMenu.map((item) => (
                  <ListItem key={item.titleKey} title={t(item.titleKey)}>
                    {t(item.descriptionKey)}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={` cursor-pointer ${navigationMenuTriggerStyle()}`}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-2">
                    <Image
                      className="rounded-full"
                      src={`flags/${lang}.svg`}
                      alt={t(lang)}
                      width={16}
                      height={16}
                    />
                    {t(lang)}
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuGroup>
                    <ul>
                      {languageKeys.map((key) => (
                        <li
                          className="flex items-center gap-1 pl-1 w-full"
                          key={key}
                        >
                          <DropdownMenuItem
                            className="w-full"
                            onClick={() => setLang(key)}
                          >
                            <Image
                              className="rounded-full"
                              src={`flags/${key}.svg`}
                              alt={t(lang)}
                              width={16}
                              height={16}
                            />
                            {locale?.[key]}
                          </DropdownMenuItem>
                        </li>
                      ))}
                    </ul>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <div
        ref={ref}
        tabIndex={0}
        role="button"
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none transition-colors cursor-pointer hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-foreground/80">
          {children}
        </p>
      </div>
    </li>
  );
});
ListItem.displayName = "ListItem";
