import type { Metadata } from "next";
import "./globals.css";
import { DockDemo } from "@/components/Dock";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeModeScript } from "flowbite-react";

export const metadata: Metadata = {
  title: "Alejandro Marcos Portfolio",
  description: "Portfolio de Alejandro Marcos, Ingeniero de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DockDemo />
        </ThemeProvider>
      </body>
    </html>
  );
}
