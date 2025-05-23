'use client';

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { ChevronDown, Search, Users, Lightbulb, Target, Code, Zap, Calendar, Rocket, LineChart, Move, Banknote, Gem, Eye, Compass, Infinity, Bug, Boxes, Trophy, CircleDot, Layers, Navigation, Layout, Terminal, Database, Code2, Server, MessageSquare, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ClientLogosMinimal from "@/components/home/ClientLogosMinimal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import ChatFloating from '@/components/ChatFloating';

const WHATSAPP_URL = "https://wa.me/554898230107";

// Componente reutilizável para etapa do processo
function ProcessStep({
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
  cards,
  imageRight = false
}) {
  // Variants para animação
  const imageVariants = {
    hidden: { opacity: 0, x: imageRight ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4,0.2,0.2,1] } }
  };
  const contentVariants = {
    hidden: { opacity: 0, x: imageRight ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4,0.2,0.2,1] } }
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${imageRight ? 'lg:flex-row-reverse' : ''}`} style={{columnGap: '3rem', marginBottom: '160px'}}>
      {/* Imagem */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={imageVariants}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-3xl shadow-xl w-full h-auto object-cover process-img-hover"
          style={{ maxWidth: '100%' }}
        />
      </motion.div>
      {/* Conteúdo */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center process-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={contentVariants}
      >
        <div className="process-badge mb-4">{badge}</div>
        <h3 className="text-4xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-lg text-white mb-8 max-w-xl">{description}</p>
        <div className="process-cards-grid">
          {cards.map((card, idx) => (
            <div className="process-card" key={idx}>
              <div className={`icon-wrapper flex-shrink-0 bg-[#232323] rounded-xl shadow`} style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {card.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1 gradient-text">{card.title}</h4>
                <p className="text-gray-200 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const techLogos = [
  { src: "/images/flutterlogo.svg", alt: "Flutter" },
  { src: "/images/railslogo.svg", alt: "Rails" },
  { src: "/images/reactlogo.svg", alt: "React" },
  { src: "/images/strapilogo.svg", alt: "Strapi" },
  { src: "/images/nodejslogo.svg", alt: "Node.js" },
  { src: "/images/typescript-logo.svg", alt: "TypeScript" },
  { src: "/images/gpt-logo.svg", alt: "ChatGPT" },
  { src: "/images/claude-logo.svg", alt: "Claude" },
  { src: "/images/cursor-logo.svg", alt: "Cursor" },
];

function TechCube({ src, alt }) {
  // Estado para controlar rotação no mobile
  const [flipped, setFlipped] = useState(false);
  // Detecta se é touch
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <div
      className="cube-3d group"
      tabIndex={0}
      aria-label={alt}
      onClick={() => isTouch && setFlipped(f => !f)}
      onMouseLeave={() => isTouch && setFlipped(false)}
      style={{ outline: 'none' }}
    >
      <div className={`cube-inner ${flipped ? 'flipped' : ''}`}> 
        {/* Face da logo */}
        <div className="cube-face cube-face-front flex flex-col items-center justify-center">
          <img
            src={src}
            alt={alt}
            style={{
              filter: 'brightness(0) invert(1)',
              maxHeight: 56,
              maxWidth: 56,
              width: 'auto',
              height: 'auto',
              marginBottom: 8,
              transition: 'transform 0.3s',
            }}
          />
        </div>
        {/* Face do nome */}
        <div className="cube-face cube-face-back flex flex-col items-center justify-center">
          <span className="cube-tech-name text-2xl md:text-3xl font-bold gradient-text" style={{letterSpacing: 1}}>{alt}</span>
        </div>
      </div>
      <style jsx>{`
        .cube-3d {
          perspective: 900px;
          width: 120px;
          height: 120px;
          margin: 0 auto;
          cursor: pointer;
          border-radius: 1.25rem;
          background: #181818;
          box-shadow: 0 2px 16px 0 #0004;
          transition: box-shadow 0.3s;
          position: relative;
        }
        .cube-3d:focus {
          box-shadow: 0 0 0 3px #DB2337, 0 2px 16px 0 #0004;
        }
        .cube-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(.4,1.6,.4,1);
        }
        .cube-3d:hover .cube-inner,
        .cube-3d:focus .cube-inner,
        .cube-inner.flipped {
          transform: rotateY(180deg);
        }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.25rem;
          backface-visibility: hidden;
          background: linear-gradient(120deg, #181818 60%, #232323 100%);
        }
        .cube-face-front {
          z-index: 2;
        }
        .cube-face-back {
          transform: rotateY(180deg);
          background: linear-gradient(90deg, #DB2337 0%, #F47F44 100%);
          color: #fff;
        }
        .cube-tech-name {
          color: #fff;
          text-shadow: 0 2px 8px #0008;
          padding: 0 8px;
        }
        @media (max-width: 600px) {
          .cube-3d {
            width: 88px;
            height: 88px;
          }
          .cube-tech-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}

function TechCubesGrid() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10" style={{maxWidth: 700, margin: '0 auto'}}>
      {techLogos.map((logo, i) => (
        <TechCube key={logo.alt} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
}

const techHub = [
  // Linha 1: IAs
  { icon: <img src="/images/gpt-logo.svg" alt="ChatGPT" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "ChatGPT", desc: "IA generativa, automação de atendimento, copiloto de processos." },
  { icon: <img src="/images/perplexity-logo.svg" alt="Perplexity" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Perplexity", desc: "IA para busca, pesquisa e copiloto de conhecimento." },
  { icon: <img src="/images/claude-logo.svg" alt="Claude" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Claude", desc: "IA para análise de dados e insights estratégicos." },
  { icon: <img src="/images/cursor-logo.svg" alt="Cursor" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Cursor", desc: "Dev Experience, automação de código, produtividade máxima." },
  // Linha 2: Front end
  { icon: <img src="/images/flutterlogo.svg" alt="Flutter" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Flutter", desc: "Mobile multiplataforma, animações e integrações complexas." },
  { icon: <img src="/images/typescript-logo.svg" alt="TypeScript" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "TypeScript", desc: "Código seguro, escalável, manutenção facilitada." },
  { icon: <img src="/images/reactlogo.svg" alt="React" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "React", desc: "SPA, SSR, animações, design system e acessibilidade." },
  { icon: <img src="/images/nextjs-logo.svg" alt="Next.js" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Next.js", desc: "SSR, SSG, API routes e edge functions para aplicações modernas." },
  // Linha 3: Back end
  { icon: <img src="/images/railslogo.svg" alt="Rails" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Rails", desc: "APIs robustas, arquitetura limpa, entrega ágil." },
  { icon: <img src="/images/nodejslogo.svg" alt="Node.js" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Node.js", desc: "APIs performáticas, microsserviços, automações." },
  { icon: <img src="/images/graphql-logo.svg" alt="GraphQL" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "GraphQL", desc: "APIs flexíveis, consulta eficiente de dados, integração moderna." },
  { icon: <img src="/images/strapilogo.svg" alt="Strapi" style={{width: 133, height: 133, filter: 'brightness(0) invert(1)'}} />, alt: "Strapi", desc: "Headless CMS, integrações rápidas, customização avançada." },
];

export default function ServicosDesenvolvimento() {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="w-full">
      <main className="max-container">
        <ServicosDesenvolvimentoContent />
      </main>
      <ChatFloating />
    </div>
  );
}

function ServicosDesenvolvimentoContent() {
  const phrases = [
    "entregas\nTODO DIA",
    "transparência\nTOTAL",
    "RESULTADO\nde negócio"
  ];

  // Estado único para controlar a animação
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Efeito para animação dos títulos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationStep(prev => (prev + 1) % (phrases.length * 4));
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Cálculo dos índices baseado no step atual
  const currentPhraseIndex = Math.floor(animationStep / 4);
  const rotationCount = animationStep % 4;

  const [showCalendly, setShowCalendly] = useState(false);

  function handleContactSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    // Aqui você pode enviar para API, e-mail, etc.
    alert('Mensagem enviada! (simulação)');
    e.target.reset();
  }

  return (
    <>
      <style jsx global>{`
        .title-wrapper {
          perspective: 1500px;
          perspective-origin: 50% 50%;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
        }

        .title-content {
          position: relative;
          height: 100%;
          transform-style: preserve-3d;
        }

        .title-text {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          transition: opacity 0.2s ease;
          opacity: 0;
        }

        .title-text.visible {
          opacity: 1;
        }

        /* Keyframes para cada rotação com overshoot mais suave */
        @keyframes rotate-to-0 {
          0% { transform: rotateX(270deg); }
          60% { transform: rotateX(-15deg); }
          80% { transform: rotateX(8deg); }
          90% { transform: rotateX(-4deg); }
          100% { transform: rotateX(0deg); }
        }

        @keyframes rotate-to-90 {
          0% { transform: rotateX(0deg); }
          60% { transform: rotateX(105deg); }
          80% { transform: rotateX(82deg); }
          90% { transform: rotateX(94deg); }
          100% { transform: rotateX(90deg); }
        }

        @keyframes rotate-to-180 {
          0% { transform: rotateX(90deg); }
          60% { transform: rotateX(195deg); }
          80% { transform: rotateX(172deg); }
          90% { transform: rotateX(184deg); }
          100% { transform: rotateX(180deg); }
        }

        @keyframes rotate-to-270 {
          0% { transform: rotateX(180deg); }
          60% { transform: rotateX(285deg); }
          80% { transform: rotateX(262deg); }
          90% { transform: rotateX(274deg); }
          100% { transform: rotateX(270deg); }
        }

        /* Estados de rotação com animações */
        .rotate-0 {
          animation: rotate-to-0 1s cubic-bezier(0.34, 1.12, 0.64, 1) forwards;
        }
        
        .rotate-1 {
          animation: rotate-to-90 1s cubic-bezier(0.34, 1.12, 0.64, 1) forwards;
        }
        
        .rotate-2 {
          animation: rotate-to-180 1s cubic-bezier(0.34, 1.12, 0.64, 1) forwards;
        }
        
        .rotate-3 {
          animation: rotate-to-270 1s cubic-bezier(0.34, 1.12, 0.64, 1) forwards;
        }

        /* Posicionamento das faces */
        .face-0 {
          transform: rotateX(0deg) translateZ(100px);
        }
        
        .face-1 {
          transform: rotateX(-90deg) translateZ(100px);
        }
        
        .face-2 {
          transform: rotateX(-180deg) translateZ(100px);
        }
        
        .face-3 {
          transform: rotateX(-270deg) translateZ(100px);
        }

        .gradient-text {
          background: linear-gradient(to right, #DB2337, #FCAB32);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          padding-right: 8px;
        }

        @keyframes fadeInText {
          0% { opacity: 0; }
          40% { opacity: 0; }
          70% { opacity: 0.3; }
          85% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        @keyframes fadeOutText {
          0% { opacity: 1; }
          30% { opacity: 0.7; }
          50% { opacity: 0.3; }
          70% { opacity: 0; }
          100% { opacity: 0; }
        }

        .text-enter {
          animation: fadeInText 1s ease forwards;
        }

        .text-exit {
          animation: fadeOutText 1s ease forwards;
        }

        .process-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          background-color: #1e1e1e;
          color: white;
          margin-bottom: 12px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .process-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .process-card {
          display: flex;
          align-items: flex-start;
          border-radius: 1rem;
          background: #181818;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
          padding: 1rem;
          margin-bottom: 0;
          border: 1px solid #232323;
          min-height: 90px;
          transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          border-color: rgba(219, 35, 55, 0.3);
        }

        .process-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .process-card {
            padding: 1rem;
          }
          .process-cards-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
        }

        .process-card > div:first-child {
          margin-right: 1rem;
        }

        .icon-wrapper {
          margin-right: 1rem;
          transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .process-card:hover .icon-wrapper {
          transform: scale(1.1);
        }

        .process-img-hover {
          transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
        }

        .process-img-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          z-index: 10;
        }

        .gradient-border-hover {
          position: relative;
          border-radius: 1rem;
          transition: box-shadow 0.3s, border 0.3s;
        }
        .gradient-border-hover:hover {
          border: 2px solid transparent;
        }
        .gradient-border-hover:hover::before {
          content: '';
          position: absolute;
          inset: -2px;
          z-index: 1;
          border-radius: 1rem;
          background: linear-gradient(90deg, #DB2337 0%, #F47F44 100%);
          pointer-events: none;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .case-card-stroke {
          background: transparent !important;
          padding: 4px;
          border-radius: 1.35rem;
          display: block;
          height: 328px;
          box-sizing: border-box;
          transition: background 0.3s;
        }
        .case-card-stroke .case-card-effect {
          background: #181818;
        }
        .case-card-stroke:hover, .case-card-stroke:focus-within, .group:hover .case-card-stroke {
          background: transparent !important;
        }
        .case-card-effect {
          background: #181818;
          border-radius: 1.25rem;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .group:hover .case-card-effect {
          transform: scale(1.04);
          box-shadow: 0 0 0 0 transparent;
        }
        .group:hover .case-card-img {
          transform: scale(1.06);
        }
        .case-card-overlay {
          transition: opacity 0.4s;
        }
        .group:hover .case-card-overlay {
          opacity: 1;
          pointer-events: auto;
        }
        .group:hover .case-card-overlay .animate-slideUpText {
          animation: slideUpText 0.5s cubic-bezier(0.4,0.2,0.2,1) both;
        }
        @keyframes slideUpText {
          0% { transform: translateY(60px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Overlay preto-transparente */
        .case-card-overlay .bg-gradient-to-t {
          background: linear-gradient(to top, rgba(0,0,0,0.92) 70%, rgba(0,0,0,0.7) 90%, transparent 100%) !important;
        }

        .logo-gradient {
          filter: brightness(0) invert(1);
          transition: filter 0.3s, transform 0.3s;
          width: 160px;
          height: 160px;
          object-fit: contain;
          display: block;
          background: none !important;
        }
        .logo-item {
          transition: transform 0.3s, background 0.3s;
          position: relative;
          border-radius: 1rem;
          background: #181818;
        }
        .logo-item:hover {
          background: linear-gradient(90deg, #DB2337 0%, #F47F44 100%);
          transform: scale(1.12);
        }
      `}</style>

      <section className="relative overflow-hidden">
        {/* Conteúdo principal sem gradientes ou fundos extras */}
        <div className="relative pt-32 md:pt-40" style={{ zIndex: 2 }}>
          <div className="max-container">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="mb-6 tracking-tight">
                  <span className="block font-bold text-[28px] md:text-[36px] leading-[1.1] mb-2 text-white">
                    Desenvolvimento com
                  </span>
                  <div className="title-wrapper">
                    <div className={`title-content rotate-${rotationCount}`}>
                      {/* Face atual */}
                      <span className={`gradient-text title-text face-0 block text-[52px] md:text-[76px] leading-[1.2] font-bold whitespace-pre-line pb-2 ${
                        rotationCount === 0 ? 'visible' : ''
                      }`}>
                        {phrases[currentPhraseIndex]}
                      </span>
                      {/* Próxima face */}
                      <span className={`gradient-text title-text face-1 block text-[52px] md:text-[76px] leading-[1.2] font-bold whitespace-pre-line pb-2 ${
                        rotationCount === 1 ? 'visible' : ''
                      }`}>
                        {phrases[(currentPhraseIndex + 1) % phrases.length]}
                      </span>
                      {/* Face oposta */}
                      <span className={`gradient-text title-text face-2 block text-[52px] md:text-[76px] leading-[1.2] font-bold whitespace-pre-line pb-2 ${
                        rotationCount === 2 ? 'visible' : ''
                      }`}>
                        {phrases[(currentPhraseIndex + 2) % phrases.length]}
                      </span>
                      {/* Face que volta ao início */}
                      <span className={`gradient-text title-text face-3 block text-[52px] md:text-[76px] leading-[1.2] font-bold whitespace-pre-line pb-2 ${
                        rotationCount === 3 ? 'visible' : ''
                      }`}>
                        {phrases[currentPhraseIndex]}
                      </span>
                    </div>
                  </div>
                </h1>
                <p className="text-[#B2C0D4] text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  Acelere o desenvolvimento do seu projeto com visão de negócio, técnica refinada e uma abordagem meticulosa no controle do seu investimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="lg" className="group gradient-bg hover:opacity-90 text-white w-full max-w-lg h-12 md:h-14 text-[18px] md:text-[20px]">
                        Falar com especialista
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
              {/* Image Section */}
              <div className="hidden md:flex w-full lg:w-1/2 justify-center items-center">
                <div className="relative w-full max-w-2xl">
                  <img 
                    src="/images/chaostosuccess.png" 
                    alt="Ilustração de Desenvolvimento" 
                    className="relative w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
            {/* Social proof section */}
            <div className="mt-36 md:mt-48">
              <ClientLogosMinimal />
            </div>
          </div>
        </div>
      </section>
      {/* Processo Section */}
      <section className="relative py-20 text-white overflow-x-hidden overflow-hidden">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DB2337" />
              <stop offset="100%" stopColor="#F47F44" />
            </linearGradient>
          </defs>
        </svg>
        <div className="max-container relative" style={{zIndex: 2, overflow: 'visible', height: 'auto'}}>
          <div className="text-center mb-20 mt-24 md:mt-32">
            <p className="text-2xl gradient-text max-w-3xl mx-auto">
              Você nunca viu algo assim
            </p>
          </div>
          {/* Etapa 1: Descoberta */}
          <ProcessStep
            imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Etapa de Descoberta"
            badge="O jeito Taller de fazer"
            title="Produto evoluindo TODO DIA"
            description={<>Tenha entregas de software todos os dias.<br />Integramos pesquisa, design e desenvolvimento em ciclos curtos e dinâmicos, alinhando as necessidades do negócio com as expectativas dos usuários — entregando valor constante.<br />Valor prático, todo dia.</>}
            cards={[
              { icon: <Zap className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Agilidade", text: "Processos realmente ágeis, entregas rápidas e impacto constante." },
              { icon: <Move className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Flexibilidade", text: "Adaptação contínua às necessidades do negócio e dos usuários." }
            ]}
          />
          {/* Etapa 2: Criação */}
          <ProcessStep
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Etapa de Criação"
            imageRight
            badge="O jeito Taller de fazer"
            title="Um alvo: RESULTADO"
            description={<>Cada entrega existe para mover o ponteiro do seu negócio.<br />Decidimos com dados, agimos com foco na cadeia de valor e conectamos cada etapa aos objetivos que realmente importam.<br /><br />O resultado? Produtos que resolvem problemas LUCRANDO.</>}
            cards={[
              { icon: <Rocket className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Foco no ROI", text: "Ação baseada em dados. Estratégia de ponta para Produtos fora da curva." },
              { icon: <Gem className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Valor que fala", text: "Entregue o que seu cliente realmente precisa." }
            ]}
          />
          {/* Etapa 3: Delivery */}
          <ProcessStep
            imageSrc="/images/statusreport.png"
            imageAlt="Etapa de Delivery"
            badge="O jeito Taller de fazer"
            title="Transparência TOTAL"
            description={<>Gestão completa do seu projeto, sem surpresas. Cada hora, cada custo, cada entrega. Com software sob demanda, garantimos sua visibilidade de todas as etapas em tempo real.<br /><br />Você no comando.</>}
            cards={[
              { icon: <Eye className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Software sob Demanda", text: "Controle cada centavo investido e defina o rumo do seu Produto" },
              { icon: <Compass className="h-6 w-6" stroke="url(#icon-gradient)" />, title: "Visão de futuro", text: "Acompanhe cada passo sem perder o destino. Saiba sempre aonde seu projeto está indo." }
            ]}
          />
          {/* CTA ao final da seção */}
          <div className="flex justify-center mt-40">
            <Button
              variant="cta"
              size="lg"
              className="gradient-bg text-white font-bold shadow-lg hover:scale-105 transition-transform px-8 py-4 rounded-[16px] text-base md:text-base"
              onClick={() => window.location.href = '#contato'}
            >
              Fale com um especialista
            </Button>
          </div>
        </div>
      </section>
      {/* Adicionar seções Discovery e Delivery após o conteúdo principal */}
      <section className="my-16 bg-[#1e1e1e] rounded-3xl">
        <div className="max-container flex flex-col md:flex-row gap-12 p-8 md:p-16">
          {/* Coluna esquerda - agora ocupa 50% da largura */}
          <motion.div 
            className="w-full md:w-1/2 min-w-[280px]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
          >
            <div className="text-white font-semibold mb-2 text-base">Um raio-x do seu produto</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.15] gradient-text">Nós descobrimos</h2>
            <p className="text-lg text-white mb-6">
              <span className="font-bold gradient-text">(re)Estruture as bases do seu produto com o nosso programa de Discovery orientado a resultados de negócio.</span> Definiremos quais ações dos usuários e mudanças estratégicas tornam seu produto relevante e lucrativo.<br /><br />Com workshops colaborativos, vamos:
            </p>
            <ul className="space-y-3 text-white text-base">
              <li className="flex items-center gap-2 py-2 px-0">
                <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
                </span>
                Diagnosticar os problemas
              </li>
              <li className="flex items-center gap-2 py-2 px-0">
                <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
                </span>
                Modelar as hipóteses de soluções
              </li>
              <li className="flex items-center gap-2 py-2 px-0">
                <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
                </span>
                Criar um plano de ação
              </li>
              <li className="flex items-center gap-2 py-2 px-0">
                <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
                </span>
                Desenvolver um roadmap de resultados
              </li>
            </ul>
          </motion.div>
          {/* Colunas direitas */}
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
          >
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
                <CircleDot className="w-8 h-8" stroke="#fff" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Impactos e Outcomes</h3>
              <p className="text-base text-white">Identificamos os problemas de negócios e descobrimos quais mudanças de comportamentos dos usuários geram resultados.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
                <Layers className="w-8 h-8" stroke="#fff" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Business Story Mapping</h3>
              <p className="text-base text-white">Mapeamos o seu negócio em uma estrutura de portfólio robusta, pronta para ir para o fluxo de trabalho da maneira mais eficaz.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
                <Users className="w-8 h-8" stroke="#fff" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Event Storming</h3>
              <p className="text-base text-white">Entendemos a jornada dos clientes de forma colaborativa através de sense making e micro narrativas dos stakeholders.</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
                <Navigation className="w-8 h-8" stroke="#fff" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Roadmap Dinâmico</h3>
              <p className="text-base text-white">Criamos um Roadmap que se adapta a realidade rapidamente, para que não vire apenas mais um documento.</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Seção 'Nós entregamos' restaurada */}
      <section className="my-16 bg-[#1e1e1e] rounded-3xl p-8 md:p-16 px-8 md:px-16 flex flex-col md:flex-row gap-12">
        {/* Coluna esquerda - agora ocupa 50% da largura */}
        <motion.div 
          className="w-full md:w-1/2 min-w-[280px]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          <div className="text-white font-semibold mb-2 text-base">Entregas eficientes</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.4] pb-2 gradient-text">Nós entregamos</h2>
          <p className="text-lg text-white mb-6">Integramos design, desenvolvimento e estratégia em um <span className="font-bold gradient-text text-lg">Processo contínuo de Discovery e Delivery.</span> Refinamos o produto de forma iterativa, garantindo<br /><br /><span className="font-bold gradient-text text-lg">Evolução alinhada ao negócio e resultados consistentes.</span></p>
          <ul className="space-y-3 text-white text-base">
            <li className="flex items-center gap-2 py-2 px-0">
              <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
              </span>
              Estratégia e operação integradas
            </li>
            <li className="flex items-center gap-2 py-2 px-0">
              <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
              </span>
              Aprendizado contínuo
            </li>
            <li className="flex items-center gap-2 py-2 px-0">
              <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
              </span>
              Priorização eficaz
            </li>
            <li className="flex items-center gap-2 py-2 px-0">
              <span className="inline-block w-8 h-8 rounded-md flex items-center justify-center bg-[#181818]">
                <span className="text-lg font-bold bg-gradient-to-r from-[#DB2337] to-[#F47F44] bg-clip-text text-transparent">&#8250;</span>
              </span>
              Time to market reduzido
            </li>
          </ul>
        </motion.div>
        {/* Colunas direitas */}
        <motion.div 
          className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
              <Infinity className="w-8 h-8" stroke="#fff" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Entregas Contínuas</h3>
            <p className="text-base text-white">Entregamos e integramos nosso código muitas vezes por dia para garantir fluidez e flexibilidade na priorização das demandas com as prioridades do negócio.</p>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
              <Bug className="w-8 h-8" stroke="#fff" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Cobertura de Testes</h3>
            <p className="text-base text-white">A qualidade do produto frente às constantes mudanças de um negócio digital só pode ser alcançada com testes automatizados.</p>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
              <Boxes className="w-8 h-8" stroke="#fff" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Arquitetura Emergente</h3>
            <p className="text-base text-white">Fazemos a arquitetura mínima para entregar valor mais rápido, mas não esquecendo que ela pode e deve crescer.</p>
          </div>
          <div className="transform transition-all duration-300 hover:scale-105">
            <div className="mb-3 flex items-center justify-center w-14 h-14 rounded-xl p-2" style={{background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)'}}>
              <Trophy className="w-8 h-8" stroke="#fff" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white leading-normal min-h-[48px]">Métricas</h3>
            <p className="text-base text-white">Tenha a visão completa do produto e acompanhe o progresso através das nossas cadências e do nosso sistema Flow Climate.</p>
          </div>
        </motion.div>
      </section>
      {/* Seção de Stack Tecnológica */}
      <section className="my-24 rounded-3xl p-8 md:p-20 px-8 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Nossa Stack</h2>
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">Tecnologias modernas e robustas que garantem performance, escalabilidade e manutenibilidade para seu produto.</p>
        <div className="mt-0 grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {techHub.map((tech, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] rounded-2xl p-0 flex items-center justify-center hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
              style={{ minHeight: '100px', minWidth: '0', height: '128px' }}
            >
              {/* Logo - só aparece no default */}
              <div
                className="z-10 transition-opacity duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0"
                style={{ pointerEvents: 'none' }}
              >
                {tech.icon}
              </div>
              {/* Fundo degradê no hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ background: 'linear-gradient(135deg, #DB2337 0%, #F47F44 100%)' }}
              />
              {/* Conteúdo de texto no hover */}
              <div
                className="flex flex-col items-center justify-center text-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-4"
                style={{ minHeight: '100%', paddingTop: 12, paddingBottom: 12 }}
              >
                <h3 className="text-xl font-bold text-white mb-1" style={{fontSize: '1.25rem'}}>{tech.alt}</h3>
                <p className="text-white/90 text-sm" style={{fontSize: '0.95rem'}}>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Seção de maiores cases */}
      <section className="my-24 rounded-3xl p-8 md:p-20 px-8 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Nossas melhores histórias</h2>
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">Conheça alguns dos projetos de maior impacto desenvolvidos pela Taller, que transformaram negócios e geraram resultados reais para nossos clientes.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Link href="/cases/xpto" className="case-card-effect-link">
            <div className="case-card-stroke group">
              <div className="case-card-effect relative rounded-2xl overflow-hidden" style={{height: '320px'}}>
                <img src="/images/statusreport.png" alt="Case 1" className="case-card-img w-full h-full object-cover transition-transform duration-500" />
                <div className="case-card-overlay absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                  <div className="w-full h-2/3 absolute bottom-0 left-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10" />
                  <div className="relative z-20 w-full flex flex-col items-center p-8 animate-none group-hover:animate-slideUpText">
                    <h3 className="text-2xl font-bold text-white mb-2">Case XPTO</h3>
                    <p className="text-white text-base mb-2 text-center">Plataforma de gestão que aumentou o faturamento em 300% para o cliente do setor financeiro.</p>
                    <span className="text-sm text-gray-400 mb-4">+1 milhão de usuários</span>
                    <button className="case-cta-btn flex items-center gap-2 border border-white rounded-lg px-5 py-2 mt-2 text-white font-semibold bg-transparent hover:bg-white/10 transition">
                      Ver história
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/cases/yz" className="case-card-effect-link">
            <div className="case-card-stroke group">
              <div className="case-card-effect relative rounded-2xl overflow-hidden" style={{height: '320px'}}>
                <img src="/images/statusreport.png" alt="Case 2" className="case-card-img w-full h-full object-cover transition-transform duration-500" />
                <div className="case-card-overlay absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                  <div className="w-full h-2/3 absolute bottom-0 left-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10" />
                  <div className="relative z-20 w-full flex flex-col items-center p-8 animate-none group-hover:animate-slideUpText">
                    <h3 className="text-2xl font-bold text-white mb-2">Case YZ</h3>
                    <p className="text-white text-base mb-2 text-center">App de delivery que revolucionou a experiência do usuário e dobrou a retenção em 6 meses.</p>
                    <span className="text-sm text-gray-400 mb-4">+500 mil downloads</span>
                    <button className="case-cta-btn flex items-center gap-2 border border-white rounded-lg px-5 py-2 mt-2 text-white font-semibold bg-transparent hover:bg-white/10 transition">
                      Ver história
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/cases/zw" className="case-card-effect-link">
            <div className="case-card-stroke group">
              <div className="case-card-effect relative rounded-2xl overflow-hidden" style={{height: '320px'}}>
                <img src="/images/statusreport.png" alt="Case 3" className="case-card-img w-full h-full object-cover transition-transform duration-500" />
                <div className="case-card-overlay absolute inset-0 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                  <div className="w-full h-2/3 absolute bottom-0 left-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10" />
                  <div className="relative z-20 w-full flex flex-col items-center p-8 animate-none group-hover:animate-slideUpText">
                    <h3 className="text-2xl font-bold text-white mb-2">Case ZW</h3>
                    <p className="text-white text-base mb-2 text-center">Sistema de automação que reduziu custos operacionais em 40% para uma grande indústria.</p>
                    <span className="text-sm text-gray-400 mb-4">+200 empresas atendidas</span>
                    <button className="case-cta-btn flex items-center gap-2 border border-white rounded-lg px-5 py-2 mt-2 text-white font-semibold bg-transparent hover:bg-white/10 transition">
                      Ver história
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* Adicionar antes da seção de cases */}
      <section className="w-full bg-gradient-to-br from-[#DB2337] to-[#F47F44] py-20 md:py-32 px-8 md:px-16 flex flex-col items-center justify-center text-center rounded-3xl mb-24 shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Diagnóstico gratuito com especialista</h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">Descubra oportunidades, riscos e caminhos para acelerar resultados no seu produto digital. Sem compromisso, direto ao ponto, com quem entende de verdade.</p>
        <a href="#contato" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg bg-white/10 hover:bg-white/20 transition">
          Solicitar diagnóstico gratuito
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </section>
      <section id="contato" className="w-full my-24 bg-[#181818] rounded-3xl p-4 md:p-12 px-8 md:px-16 shadow-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Coluna 1: Formulário */}
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center md:text-left">Entre em contato</h2>
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input name="nome" required placeholder="Nome" className="flex-1 rounded-lg border border-gray-700 bg-[#232323] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DB2337]" />
                <input name="sobrenome" required placeholder="Sobrenome" className="flex-1 rounded-lg border border-gray-700 bg-[#232323] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DB2337]" />
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <input name="email" type="email" required placeholder="E-mail" className="flex-1 rounded-lg border border-gray-700 bg-[#232323] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DB2337]" />
                <input name="whatsapp" required placeholder="Whatsapp/Celular" className="flex-1 rounded-lg border border-gray-700 bg-[#232323] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DB2337]" />
              </div>
              <textarea name="mensagem" required placeholder="Mensagem" rows={4} className="rounded-lg border border-gray-700 bg-[#232323] px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#DB2337]" />
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-2">
                <button type="submit" className="bg-gradient-to-r from-[#DB2337] to-[#F47F44] text-white font-bold rounded-xl px-8 py-3 text-lg shadow hover:scale-105 transition">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
          {/* Coluna 2: Agendamento */}
          <div className="flex-1 min-w-0 flex flex-col items-center justify-start md:justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">Agenda Taller</h3>
            <p className="text-base text-white/80 mb-6 max-w-xs">Escolha uma data e hora diretamente na nossa agenda.</p>
            <button type="button" onClick={() => setShowCalendly(true)} className="border-2 border-[#DB2337] text-[#DB2337] font-bold rounded-xl px-8 py-3 text-lg bg-transparent hover:bg-[#DB2337]/10 transition flex items-center gap-2 w-full max-w-xs justify-center">
              Agendar horário
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l2 2"/></svg>
            </button>
          </div>
        </div>
        {showCalendly && (
          <div className="fixed inset-0 z-50 flex justify-center bg-black/60" style={{alignItems: 'flex-start'}}>
            <div className="bg-[#181818] rounded-2xl shadow-2xl p-12 relative max-w-2xl w-full animate-fadeInUp overflow-hidden" style={{marginTop: 120}}>
              <button onClick={() => setShowCalendly(false)} aria-label="Fechar" className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white bg-[#232323] hover:bg-[#444] rounded-lg text-2xl z-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DB2337]">
                ×
              </button>
              <iframe
                src="https://calendly.com/joao-deiro-taller/30min"
                title="Agendar horário"
                className="w-full border-0"
                style={{minHeight: 500, height: '600px', maxHeight: '70vh', borderRadius: '1rem'}}
                allow="camera; microphone; fullscreen;"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
} 