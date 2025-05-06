import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";
import "../index.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taller",
  description: "Taller Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB2337" />
              <stop offset="100%" stopColor="#F47F44" />
            </linearGradient>
          </defs>
        </svg>
        <ClientProviders>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  );
}