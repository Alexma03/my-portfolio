import type { Metadata } from "next";
import "./globals.css";
import { DockDemo } from "@/components/Dock";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
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
