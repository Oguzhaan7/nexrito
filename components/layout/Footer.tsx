"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { Github, Disc, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-muted border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3 items-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">Nexrito</span>
          </Link>
          <span className="text-xs text-muted-foreground max-w-xs">
            {t("footer_desc")}
          </span>
          <div className="flex gap-3 mt-2">
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-primary transition-colors"
            >
              <Disc size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row gap-8 justify-center">
          <div>
            <h4 className="font-semibold mb-2 text-primary">
              {t("footer_menu")}
            </h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("champions")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("matches")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("leaderboard")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("support")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary">
              {t("footer_legal")}
            </h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link href="/about/privacy-policy" className="hover:underline">
                  {t("privacy_policy")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("terms_of_service")}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <span className="text-xs text-muted-foreground mt-6 md:mt-auto">
            © {new Date().getFullYear()} Nexrito. {t("footer_rights")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
