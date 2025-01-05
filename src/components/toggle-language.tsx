"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import ReactCountryFlag from "react-country-flag";

function LanguageToggle({ locale }: { locale: string }) {
  const setCookieLocale = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    window.location.reload();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale === "en" ? (
            <ReactCountryFlag
              countryCode="US"
              alt="English"
              width={24}
              height={24}
            />
          ) : (
            <ReactCountryFlag
              countryCode="SA"
              alt="Arabic"
              width={24}
              height={24}
            />
          )}
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setCookieLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCookieLocale("ar")}>
          Arabic
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageToggle;
