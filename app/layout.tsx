import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { LoadingFallback } from "@/components/loading-fallback";
import { Preload } from "./preload";
import { Dumbbell } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimización de font display
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FitZone | Tu gimnasio de confianza",
  description:
    "FitZone es el gimnasio moderno para jóvenes de 20 a 40 años. Equipos de última generación, entrenadores certificados y clases para todos los niveles.",
  manifest: "/manifest.json",
  icons: {
    icon: "/lucide-dumbbell.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Preconectar a dominios críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <Preload />
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
      </body>
    </html>
  );
}
