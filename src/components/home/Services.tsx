import React from "react";
import { Link } from "react-router-dom";
import { Phone, Code2, Sparkles, Boxes, Lightbulb, BookOpen, Puzzle, Rocket, HandshakeIcon, Search, ChevronDown, Mail } from "lucide-react";
import { Button } from "../ui/button";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const serviceItems = [
  {
    icon: <Code2 className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Desenvolvimento Ágil",
    description:
      "Desenvolvimento contínuo e ágil de software, com entregas diárias e foco em resultados mensuráveis. Transformamos sua visão em realidade com velocidade e qualidade.",
  },
  {
    icon: <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Inteligência Artificial",
    description:
      "Economia operacional de até 90% alinhado a um ROI exponencial. Soluções de IA que automatizam processos, geram insights valiosos e potencializam a tomada de decisão.",
  },
  {
    icon: <Boxes className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Governança de Produtos Digitais",
    description:
      "Estruturação e Gerenciamento de Processos, Abordagens, Estratégia e Produto. Crescimento consistente, escalável e com foco na cadeia de valor.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Product Strategy",
    description:
      "Criação de MVPs, estruturação de Produtos, direcionamento de projetos, metas e priorização 100% business-driven. Visualize seu negócio como nunca e realmente entenda o seu público.",
  },
  {
    icon: <Puzzle className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Consultorias",
    description:
      "Orientação especializada para transformação digital e inovação tecnológica. Ajudamos você a tomar as melhores decisões para o futuro do seu negócio.",
  },
  {
    icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />,
    title: "Treinamentos",
    description:
      "Capacitamos times de Tecnologia e agilidade a terem visão sistêmica e fluidez em seus processos, e a criarem produtos de forma organizada e estruturada, rumo ao sucesso.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Efeito de sombra gradiente */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] bg-gradient-to-br from-[#DB2337]/20 to-[#F47F44]/20 rounded-full blur-[80px] opacity-100" />
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-gradient-to-br from-[#DB2337]/20 to-[#F47F44]/20 rounded-full blur-[80px] opacity-100" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Transformando o futuro do trabalho digital</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformamos desafios em oportunidades com soluções tecnológicas inovadoras.
            Nossa expertise abrange desde desenvolvimento ágil até inteligência artificial avançada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="ai-card flex flex-col p-6 md:p-8 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_40px_rgba(219,34,55,0.15)_,_0_0_40px_rgba(244,127,68,0.15)] bg-[#1a1a1a] border border-[#1d1d1d] rounded-lg backdrop-blur-sm relative group"
            >
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#121212] flex items-center justify-center mb-4 md:mb-5 relative transition-transform duration-300 group-hover:scale-110">
                {item.icon}
                <div
                  className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text transition-colors duration-300">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300/90 transition-colors duration-300 group-hover:text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="https://wa.me/554898230107" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg" className="group">
              Falar com especialista
              <WhatsAppIcon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 text-white" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
