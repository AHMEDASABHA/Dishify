import React from "react";
import { ModeToggle } from "./toggle-theme-button";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "@assets/images/logo.png";
import Link from "next/link";
import LanguageToggle from "./toggle-language";

async function Header({
  locale,
}: {
  locale: string;
}) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Dishify Logo" width={50} height={50} />
          <h2 className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-green-300 dark:to-green-700 lg:text-3xl">
            Dishify
          </h2>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <LanguageToggle locale={locale} />
      </div>
    </header>
  );
}

export default Header;
