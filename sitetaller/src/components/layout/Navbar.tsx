import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Importando a logo
import logo from "/public/logo.svg";

// Constantes movidas para fora do componente para evitar recriação
const NAV_ITEMS = [
  { name: "Home", path: "#home" },
  { name: "Sobre", path: "#sobre" },
  { name: "Serviços", path: "#servicos" },
  { name: "Contato", path: "#contato" },
] as const;

const WHATSAPP_URL = "https://wa.me/554898230107";
const SCROLL_THRESHOLD = 20;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoização da função de scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Componente do item de navegação para desktop
  const NavItem = ({ name, path, href }: { name: string; path?: string; href?: string }) => (
    <a
      href={href || path}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="text-sm font-semibold leading-6 text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DB2237] hover:to-[#F47F44] transition-colors duration-300"
    >
      {name}
    </a>
  );

  // Componente do item de navegação para mobile
  const MobileNavItem = ({ name, path, href }: { name: string; path?: string; href?: string }) => (
    <a
      href={href || path}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DB2237] hover:to-[#F47F44] transition-colors duration-300"
      onClick={() => setIsOpen(false)}
    >
      {name}
    </a>
  );

  // Componente do botão CTA com dropdown
  const CTAButton = ({ isMobile = false }: { isMobile?: boolean }) => {
    if (isMobile) {
      return (
        <Button
          variant="cta"
          size="lg"
          className="w-full"
          onClick={() => window.location.href = WHATSAPP_URL}
        >
          Falar com especialista
        </Button>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="cta" size="lg" className="group relative bg-gradient-to-r from-[#DB2337] to-[#F47F44] hover:from-[#DB2337]/90 hover:to-[#F47F44]/90 transition-all duration-300">
            Falar com especialista
            <ChevronDown className="ml-2 h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={4} className="w-[260px] bg-[#1e1e1e]/95 backdrop-blur-sm border border-white/5 rounded-xl shadow-xl p-1">
          <DropdownMenuItem className="rounded-lg focus:bg-white/5">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full px-3 py-2 text-white/90 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-lg focus:bg-white/5">
            <a 
              href="#contato"
              className="flex items-center w-full px-3 py-2 text-white/90 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="mr-2 h-5 w-5"
                fill="none"
                stroke="url(#emailGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DB2337" />
                    <stop offset="100%" stopColor="#F47F44" />
                  </linearGradient>
                </defs>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-medium">E-mail</span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#121212]/95 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="max-container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="cursor-pointer"
        >
          <img src="/images/logo.png" alt="Taller" className="h-16 md:h-16 transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
          <CTAButton />
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-500 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute w-full bg-[#121212]/95 backdrop-blur-md shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] py-4 border-t border-gray-800" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="max-container flex flex-col space-y-3">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-2 py-6">
                {NAV_ITEMS.map((item) => (
                  <MobileNavItem key={item.name} {...item} />
                ))}
              </div>
              <div className="py-6">
                <CTAButton isMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
