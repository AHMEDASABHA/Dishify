import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cookies } from "next/headers";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Dishify",
    absolute: "Dishify",
  },
  description: "Dishify is a platform for sharing and discovering recipes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  const locale = cookieStore.get("locale")?.value || "en";

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <NuqsAdapter>
              <ReactQueryClientProvider>
                <SidebarProvider defaultOpen={defaultOpen}>
                  <MainSidebar locale={locale} />
                  <SidebarInset>
                    <main>
                      <Header locale={locale} />
                      {children}
                      <Footer />
                    </main>
                  </SidebarInset>
                </SidebarProvider>
              </ReactQueryClientProvider>
            </NuqsAdapter>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
