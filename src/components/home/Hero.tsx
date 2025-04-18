import { ArrowRight, Sparkles, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ClientLogos from "./ClientLogos";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const WHATSAPP_URL = "https://wa.me/554898230107";

const Hero = () => {
  const [activeSquares, setActiveSquares] = useState<boolean[]>(Array(16).fill(false));

  useEffect(() => {
    // Função para gerar um novo estado aleatório mantendo pelo menos 5 quadrados acesos
    const generateNewState = () => {
      const newState = Array(16).fill(false);
      // Primeiro, ativa aleatoriamente 5 quadrados
      while (newState.filter(Boolean).length < 5) {
        const randomIndex = Math.floor(Math.random() * 16);
        newState[randomIndex] = true;
      }
      // Depois, ativa aleatoriamente alguns quadrados adicionais
      for (let i = 0; i < 16; i++) {
        if (!newState[i] && Math.random() > 0.85) { // 15% de chance de ativar quadrados adicionais
          newState[i] = true;
        }
      }
      return newState;
    };

    // Atualiza o estado a cada 1 segundo
    const interval = setInterval(() => {
      setActiveSquares(generateNewState());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[#121212]">
        {/* Top right red glow */}
        <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        {/* Bottom left red glow */}
        <div className="absolute -bottom-[300px] md:-bottom-[400px] -left-[300px] md:-left-[400px] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-container relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Provocative content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-6 tracking-tight">
              <span className="gradient-text block font-bold text-[48px] md:text-[88px] leading-[1.1]">Criando RESULTADO</span>
              <span className="block text-gray-100 text-[24px] md:text-[36px] leading-[1.1] font-semibold">e não apenas produtos.</span>
            </h1>
            
            <p className="text-[#B2C0D4] text-base md:text-lg mb-4 max-w-lg mx-auto lg:mx-0">
              Projeto travado? Devs perdidos? Board cobrando ROI?
              <br />
              A gente entra quando não dá mais pra errar.
            </p>
            <p className="text-[#B2C0D4] text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Alinhamos negócio, tecnologia e execução para criar <span className="gradient-text font-bold text-[18px] md:text-[20px]">produtos lucrativamente encantadores</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" className="group gradient-bg hover:opacity-90 text-white w-full max-w-lg h-12 md:h-14 text-[18px] md:text-[20px]">
                    Desafie nossa equipe
                    <ChevronDown className="ml-2 h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={4} className="w-[520px] bg-[#1e1e1e]/95 backdrop-blur-sm border border-white/5 rounded-xl shadow-xl p-1">
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
            </div>
          </div>
          
          {/* Dynamic visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-2xl aspect-video">
              {/* Grid de quadrados animados */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4">
                  {Array(16).fill(0).map((_, index) => (
                    <div
                      key={index}
                      className="w-[100px] h-[100px] rounded-2xl bg-white/5 relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary glow-square"
                        style={{
                          opacity: activeSquares[index] ? 0.6 : 0
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Ícone central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse opacity-20"></div>
                    <div className="absolute inset-2 bg-[#121212] rounded-full flex items-center justify-center">
                      <img src="images/icon-only-white.png" alt="Taller" className="h-16 w-16 md:h-20 md:w-20" />
                    </div>
                    <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof section */}
        <ClientLogos />
      </div>
    </section>
  );
};

export default Hero;
