import React from "react";
import { ModeToggle } from "./toggle-theme-button";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "@assets/images/logo.png";
import Link from "next/link";
import LanguageToggle from "./toggle-language";
import { Button } from "./ui/button";

async function Header({ locale }: { locale: string }) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Button
          variant={"ghost"}
          size={'lg'}
          className="m-0 gap-0 space-x-0 pe-3 ps-0"
          asChild
        >
          <Link href="/">
            <Image src={logo} alt="Dishify Logo" width={60} height={60} />
            <h2 className="bg-gradient-to-r from-green-900 to-green-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent dark:from-green-300 dark:to-green-700 lg:text-3xl">
              {locale == "en" ? "Dishify" : "طبقي"}
            </h2>
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <ModeToggle />
        <LanguageToggle locale={locale} />
      </div>
    </header>
  );
}

export default Header;
