'use client';

import { useEffect, useState, useCallback, useMemo } from "react";
import { ChevronDown, Search, Users, Lightbulb, Target, Code, Zap, Calendar, Rocket, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ClientLogosMinimal from "@/components/home/ClientLogosMinimal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WHATSAPP_URL = "https://wa.me/554898230107";

// Configuração das partículas - Memoizado para evitar recriações
const createParticles = () => Array.from({ length: 70 }).map(() => ({
  x: 50 + (Math.random() - 0.5) * 50,
  y: 110,
  vx: (Math.random() - 0.5) * 4,
  vy: -Math.random() * 2,
  size: Math.random() * 2 + 1,
  turbulence: Math.random() * 2 * Math.PI,
  turbulenceFreq: Math.random() * 0.2 + 0.1,
  lifespan: Math.random() * 3000 + 2000,
  birth: Date.now(),
  chaos: Math.random() * 2 * Math.PI
}));

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
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-24 ${imageRight ? 'lg:flex-row-reverse' : ''}`} style={{columnGap: '3rem'}}>
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-3xl shadow-xl w-full h-auto object-cover process-img-hover"
          style={{ maxWidth: '100%' }}
        />
      </div>
      {/* Conteúdo */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center process-content">
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
                <h4 className="font-semibold mb-1 text-white">{card.title}</h4>
                <p className="text-gray-200 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicosDesenvolvimento() {
  return (
    <div className="overflow-x-hidden w-full">
      <ServicosDesenvolvimentoContent />
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
  const [particles, setParticles] = useState(() => createParticles());

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

  // Efeito para atualizar partículas - Otimizado
  useEffect(() => {
    let animationFrameId: number;
    const turbulenceStrength = 0.224;
    const upwardForce = 0.07;
    let lastTime = Date.now();

    const updateParticles = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const age = currentTime - particle.birth;
          
          if (age > particle.lifespan) {
            return {
              ...createParticles()[0],
              birth: currentTime
            };
          }

          const timeScale = currentTime * 0.001;
          
          // Cálculos de turbulência otimizados
          const turbulenceX = (
            Math.sin(timeScale * particle.turbulenceFreq + particle.turbulence) * turbulenceStrength +
            Math.cos(timeScale * particle.turbulenceFreq * 2.5 + particle.chaos) * turbulenceStrength * 0.14 +
            Math.sin(timeScale * particle.turbulenceFreq * 4.2) * turbulenceStrength * 0.07
          );

          const turbulenceY = (
            Math.cos(timeScale * particle.turbulenceFreq * 1.5) * turbulenceStrength * 0.21 +
            Math.sin(timeScale * particle.turbulenceFreq * 3.7 + particle.chaos) * turbulenceStrength * 0.105 +
            Math.cos(timeScale * particle.turbulenceFreq * 5.1) * turbulenceStrength * 0.035
          );

          const randomForceX = (Math.random() - 0.5) * 0.056;
          const randomForceY = (Math.random() - 0.5) * 0.056;
          
          const vx = (particle.vx + (turbulenceX + randomForceX) * deltaTime * 0.07);
          const vy = (particle.vy + (turbulenceY + randomForceY - upwardForce) * deltaTime * 0.07);

          let newX = particle.x + vx * deltaTime;
          let newY = particle.y + vy * deltaTime;

          // Otimização do wrap-around
          if (newX < -20) newX = 120;
          if (newX > 120) newX = -20;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: vx * 0.985,
            vy: vy * 0.985
          };
        })
      );

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Memoize o componente de partículas para evitar re-renders desnecessários
  const ParticlesComponent = useMemo(() => (
    <div className="absolute inset-0" style={{ zIndex: 1 }}>
      {particles.map((particle, i) => {
        const age = Date.now() - particle.birth;
        const lifeProgress = age / particle.lifespan;
        const fadeOut = Math.max(0, Math.min(1, 1 - lifeProgress * 2));
        
        return (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#DB2337] to-[#F47F44] rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: fadeOut * 0.8,
              width: `${8 * particle.size}px`,
              height: `${8 * particle.size}px`,
              transform: `scale(${Math.max(0.2, 1 - lifeProgress)})`,
              filter: 'blur(1px)',
              transition: 'none'
            }}
          />
        );
      })}
    </div>
  ), [particles]);

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
        }

        .process-img-hover {
          transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .process-img-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
          z-index: 10;
        }
      `}</style>

      <section className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[#121212]" style={{ zIndex: 0 }}>
          {ParticlesComponent}

          {/* Círculos gradientes */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-[-25%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#DB2337]/10 via-[#FCAB32]/5 to-transparent blur-[150px]" />
            <div className="absolute bottom-1/4 left-[-25%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#FCAB32]/10 via-[#DB2337]/5 to-transparent blur-[150px]" />
            
            {/* Sombra degradê na parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative pt-32 md:pt-40" style={{ zIndex: 20 }}>
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
      <section className="relative z-10 py-20 text-white overflow-x-hidden" style={{overflow: 'visible', height: 'auto'}}>
        {/* Fundo absoluto igual ao da hero section */}
        <div className="absolute inset-0 w-full h-full bg-[#121212]" style={{zIndex: 0}} />
        {/* Gradientes da hero section */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-[300px] md:-bottom-[400px] -left-[300px] md:-left-[400px] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        </div>
        {/* Partículas entre o fundo e o conteúdo */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
          {ParticlesComponent}
        </div>
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
            title="Seu produto evoluindo TODO DIA"
            description="Mergulhamos profundamente no seu negócio para entender objetivos, desafios e oportunidades. Esta fase é crucial para alinhar expectativas e definir o escopo inicial do projeto."
            cards={[
              { icon: <Search className="h-6 w-6 text-blue-400" />, title: "Análise de requisitos", text: "Levantamento detalhado das necessidades" },
              { icon: <Users className="h-6 w-6 text-blue-400" />, title: "Workshop com stakeholders", text: "Sessões colaborativas de ideação" },
              { icon: <Lightbulb className="h-6 w-6 text-blue-400" />, title: "Prototipação", text: "Visualização inicial da solução" },
              { icon: <Target className="h-6 w-6 text-blue-400" />, title: "Planejamento estratégico", text: "Definição de prioridades e milestones" }
            ]}
          />

          {/* Etapa 2: Criação */}
          <ProcessStep
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageAlt="Etapa de Criação"
            imageRight
            badge="O jeito Taller de fazer"
            title="Um alvo: RESULTADO"
            description="É nesta fase que transformamos conceitos em código. Com ciclos curtos de desenvolvimento e entregas diárias, você acompanha a evolução do seu projeto em tempo real."
            cards={[
              { icon: <Code className="h-6 w-6 text-indigo-400" />, title: "Desenvolvimento ágil", text: "Sprints curtos com entregas frequentes" },
              { icon: <Zap className="h-6 w-6 text-indigo-400" />, title: "Testes automatizados", text: "Garantia de qualidade contínua" },
              { icon: <Calendar className="h-6 w-6 text-indigo-400" />, title: "Reuniões diárias", text: "Alinhamento frequente de progresso" },
              { icon: <Rocket className="h-6 w-6 text-indigo-400" />, title: "Integração contínua", text: "Ambiente sempre atualizado" }
            ]}
          />

          {/* Etapa 3: Delivery */}
          <ProcessStep
            imageSrc="/images/statusreport.png"
            imageAlt="Etapa de Delivery"
            badge="O jeito Taller de fazer"
            title="Transparência TOTAL"
            description="Não apenas entregamos software, mas garantimos que ele seja implementado com sucesso e traga os resultados esperados para seu negócio, com suporte contínuo."
            cards={[
              { icon: <Rocket className="h-6 w-6 text-purple-400" />, title: "Implementação gradual", text: "Lançamentos controlados e seguros" },
              { icon: <Users className="h-6 w-6 text-purple-400" />, title: "Treinamento de usuários", text: "Capacitação para uso efetivo" },
              { icon: <LineChart className="h-6 w-6 text-purple-400" />, title: "Monitoramento", text: "Análise contínua de desempenho" },
              { icon: <Zap className="h-6 w-6 text-purple-400" />, title: "Melhoria contínua", text: "Evolução constante da solução" }
            ]}
          />

          {/* CTA ao final da seção */}
          <div className="flex justify-center mt-40">
            <a href="#contato" className="px-8 py-4 rounded-[16px] bg-gradient-to-r from-primary to-secondary text-white text-2xl font-bold shadow-lg hover:scale-105 transition-transform">
              Fale com um especialista
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes particle {
          0% {
            transform: translate(0, 0);
            opacity: 0;
            background: #F47F44;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--wiggle), -110vh);
            opacity: 0;
            background: #DB2337;
          }
        }
      `}</style>
    </>
  );
} 