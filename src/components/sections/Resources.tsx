import { ArrowRight, Lightbulb, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { useState, useEffect } from "react";

// Função para formatar a data
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', { 
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

const Resources = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Buscar os posts do blog da Taller
    fetch('https://blog.taller.net.br/wp-json/wp/v2/posts?per_page=3')
      .then(response => response.json())
      .then(data => {
        const formattedPosts = data.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 150) + '...',
          link: post.link,
          date: formatDate(post.date)
        }));
        setPosts(formattedPosts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
        // Fallback para posts estáticos em caso de erro
        setPosts(blogPosts);
      });
  }, []);

  return (
    <section id="recursos" className="section-padding bg-[#1e1e1e] relative">
      {/* Visual elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTJ2NmgtNnYtNmg2em0tNiAwdjZoLTZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="gradient-text mb-4 text-3xl md:text-4xl lg:text-5xl">Conhecimento compartilhado</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Transformamos desafios em oportunidades com soluções tecnológicas inovadoras. 
            Nossa expertise abrange desde desenvolvimento ágil até inteligência artificial avançada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
          {/* Blog Posts Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 md:gap-3">
              <Brain className="h-5 w-5 md:h-6 md:w-6 gradient-text" />
              <h3 className="text-xl md:text-2xl font-bold gradient-text">Taller Blog</h3>
            </div>
            
            {posts.map((post, index) => (
              <a 
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="block ai-card hover:bg-[#1a1a1a]/60 group cursor-pointer border-l-4 border-transparent hover:border-gradient-to-r hover:from-[#DB2337] hover:to-[#F47F44] transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-[#171717]"
              >
                <div className="flex gap-4 md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h4 className="font-bold text-lg text-white group-hover:gradient-text transition-colors duration-300">{post.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{post.excerpt}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="text-center mt-6">
              <a 
                href="https://blog.taller.net.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center group"
              >
                <Button variant="tertiary" className="group px-0 text-transparent bg-clip-text bg-gradient-to-r from-[#DB2337] to-[#F47F44] hover:from-[#DB2337]/80 hover:to-[#F47F44]/80 text-sm md:text-base">
                  Ver todos os artigos 
                  <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 stroke-[url(#arrow-gradient)]" />
                </Button>
              </a>
            </div>
          </div>

          {/* Taller Media Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 md:gap-3">
              <Lightbulb className="h-5 w-5 md:h-6 md:w-6 gradient-text" />
              <h3 className="text-xl md:text-2xl font-bold gradient-text">Taller Media</h3>
            </div>

            <a 
              href="https://www.youtube.com/watch?v=nAsg_JBW7xM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block ai-card transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_0_30px_rgba(219,34,55,0.2)_,_0_0_30px_rgba(244,127,68,0.2)] bg-[#121212] border border-gray-800/50"
            >
              <div className="mb-4 md:mb-6">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center relative group">
                    {/* Thumbnail do vídeo com overlay gradiente */}
                    <img 
                      src={`https://img.youtube.com/vi/nAsg_JBW7xM/maxresdefault.jpg`}
                      alt="Thumbnail do vídeo"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DB2337]/20 to-[#F47F44]/20 group-hover:from-[#DB2337]/40 group-hover:to-[#F47F44]/40 transition-opacity" />
                    
                    {/* Botão de play com gradiente */}
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#DB2337] to-[#F47F44] flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-6 md:border-y-8 border-y-transparent border-l-8 md:border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
              <h4 className="font-bold text-lg md:text-xl text-white group-hover:gradient-text transition-colors duration-300">Conheça a Taller</h4>
              <p className="text-sm md:text-base text-gray-300 mt-2 md:mt-3">
                Descubra como transformamos desafios em oportunidades através da tecnologia e inovação.
              </p>
              <div className="mt-3 md:mt-4">
                <span className="group px-0 text-transparent bg-clip-text bg-gradient-to-r from-[#DB2337] to-[#F47F44] hover:from-[#DB2337]/80 hover:to-[#F47F44]/80 text-sm md:text-base inline-flex items-center">
                  Assista ao vídeo 
                  <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 stroke-[url(#arrow-gradient)]" />
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="https://blog.taller.net.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center group"
          >
            <Button variant="tertiary" className="group px-0 text-transparent bg-clip-text bg-gradient-to-r from-[#DB2337] to-[#F47F44] hover:from-[#DB2337]/80 hover:to-[#F47F44]/80 text-lg">
              Acesse conteúdo exclusivo 
              <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 stroke-[url(#arrow-gradient)]" />
            </Button>
          </a>
        </div>
      </div>

      {/* Definição do gradiente para os ícones */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DB2337" />
            <stop offset="100%" stopColor="#F47F44" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

// Fallback posts caso a API falhe
const blogPosts = [
  {
    title: "Desenvolvimento Ágil na Prática",
    excerpt: "Como implementamos metodologias ágeis para entregar resultados reais e mensuráveis em projetos de tecnologia.",
    link: "https://blog.taller.net.br",
    date: "26 mar 2024"
  },
  {
    title: "O Impacto da IA no Desenvolvimento",
    excerpt: "Descubra como a inteligência artificial está transformando a forma como desenvolvemos software.",
    link: "https://blog.taller.net.br",
    date: "24 mar 2024"
  },
  {
    title: "Transformação Digital na Prática",
    excerpt: "Cases reais de como ajudamos empresas a se transformarem digitalmente com resultados mensuráveis.",
    link: "https://blog.taller.net.br",
    date: "22 mar 2024"
  }
];

export default Resources;
