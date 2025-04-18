import React from "react";
import { Rocket, Trophy, Eye } from "lucide-react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="max-container">
        <div className="text-center">
          <h2 className="gradient-text mb-4">Não somos como os outros</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enquanto muitos se acomodam com entregas automáticas e promessas sem fundamento, 
            na Taller cada linha de código é um passo estratégico para a evolução do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-gray-800/50 h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Rocket className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">TODO DIA seu produto evolui</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Se seu produto não muda diariamente, ele está morrendo. Entregamos software todo dia, porque velocidade é o que separa quem domina o mercado de quem desaparece. Pequenas mudanças diárias criam grandes transformações, e é isso que entregamos: evolução contínua, visível e com propósito.
            </p>
          </div>
          
          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-gray-800/50 h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">Compromisso com RESULTADO</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Você não contrata um projeto fechado, e sim a transformação do seu produto. Nós garantimos a entrega contínua do que mais importa. A cada ciclo, alinhamos foco, aprendizados e dados para mover o ponteiro.
            </p>
          </div>
          
          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-gray-800/50 h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Eye className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">Veja e controle cada Real investido</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Em um mercado onde os projetos se perdem em prazos e escopos nebulosos, nós fazemos diferente: cada real aplicado é transparente, cada etapa tem um propósito claro, e você acompanha cada decisão em tempo real. Tenha CONTROLE TOTAL do seu investimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 