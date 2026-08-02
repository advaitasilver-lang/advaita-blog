import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/ui/Navigation";
import { AmbientEffects } from "@/components/ui/AmbientEffects";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "Advaita Silver | Poetry",
  description: "Where every poem is a borrowed heartbeat. A premium poetry collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          cormorant.variable,
          sourceSerif.variable,
          inter.variable,
          "min-h-screen font-body antialiased selection:bg-accent/30 text-text-primary bg-bg-dark"
        )}
      >
        <AmbientEffects />
        <Navigation />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
