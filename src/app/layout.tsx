import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";
import "../index.css";

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
      <body>
        <ClientProviders>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  );
}