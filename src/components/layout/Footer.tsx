'use client';

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-gray-300 py-8 mt-auto">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/images/logo.png" alt="Taller" className="h-16 transition-transform duration-300 hover:scale-105" />
            </Link>
            <p className="text-sm text-gray-400">
              Soluções em tecnologia para seu negócio
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                <a href="https://wa.me/554898230107" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: (48) 98230-107
                </a>
              </li>
              <li className="text-sm text-gray-400">
                <a href="mailto:contato@taller.com.br" className="hover:text-white transition-colors">
                  Email: contato@taller.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {year} Taller. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
