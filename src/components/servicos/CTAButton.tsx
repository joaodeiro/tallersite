'use client';

import { usePathname } from 'next/navigation';
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAButton() {
  const pathname = usePathname();
  const isDevPage = pathname === '/servicos/desenvolvimento';

  return (
    <Button
      variant="secondary"
      size="lg"
      className={`group transition-all duration-300 border-2 border-gradient text-transparent bg-clip-text bg-gradient-to-r from-[#DB2337] to-[#FCAB32] hover:bg-gradient-to-r hover:from-[#DB2337]/10 hover:to-[#FCAB32]/10 hover:text-white`}
      onClick={() => {
        window.location.href = 'https://wa.me/554898230107';
      }}
    >
      Falar com especialista
      <Eye className="ml-2 h-4 w-4 gradient-icon" />
    </Button>
  );
} 