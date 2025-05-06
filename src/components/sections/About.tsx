import { ArrowRight, Rocket, Trophy, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { COLORS, GRADIENTS, TRANSITIONS } from "@/lib/constants";

const About = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[#1a1a1a]" id="sobre">
      <div className="max-container">
        <div className="text-center mb-8 md:mb-12 animate-slideUp opacity-0">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl text-white">
            Como prever o futuro?<br />
            <span className="gradient-text text-4xl md:text-5xl lg:text-6xl">Criando o futuro!</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Enquanto muitos se acomodam, na Taller cada linha de código é um passo estratégico para a evolução do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-[#171717] h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Rocket className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">Evolução diária</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Seu produto evolui todo dia. Sem exceções. Entregamos melhorias diárias porque sabemos que velocidade é o que separa líderes de mercado dos demais.
            </p>
          </div>

          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-[#171717] h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">Foco em Resultados</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Você não contrata um projeto, contrata transformação. A cada ciclo, alinhamos objetivos e métricas para garantir que seu investimento gere resultados reais e mensuráveis.
            </p>
          </div>

          <div className="ai-card flex flex-col items-center text-center transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-[#171717] h-full">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4 md:mb-5 relative group">
              <Eye className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 gradient-text">Transparência Total</h3>
            <p className="text-sm md:text-base text-gray-300 flex-grow">
              Chega de projetos com prazos e custos nebulosos. Aqui você tem controle total: cada real investido é transparente, cada etapa tem propósito claro, e você acompanha tudo em tempo real.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button
            variant="cta"
            size="lg"
            className="group hover:scale-105 transition-transform"
            aria-label="Conhecer serviços"
            onClick={() => {
              window.location.href = '/servicos/desenvolvimento';
            }}
          >
            Conhecer serviços
            <Eye className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
