import React from "react";
import Link from "next/link";
import { Phone, Code2, Sparkles, Boxes, Lightbulb, BookOpen, Puzzle, Rocket, HandshakeIcon, Search, ChevronDown, Mail } from "lucide-react";
import { Button } from "../ui/button";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
          <p className="text-lg max-w-3xl mx-auto">
            Transformamos desafios em oportunidades com soluções tecnológicas inovadoras.
            Nossa expertise abrange desde desenvolvimento ágil até inteligência artificial avançada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="bg-[#1e1e1e] border-white/5 hover:border-white/10 transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-[#DB2237] to-[#F47F44] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-4">
                  {item.description}
                </CardDescription>
                {item.title === "Desenvolvimento Ágil" ? (
                  <Link href="/servicos/desenvolvimento" className="inline-block">
                    <Button variant="cta" className="group hover:scale-105 transition-transform">
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="#contato" className="inline-block">
                    <Button variant="cta" className="group hover:scale-105 transition-transform">
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
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
