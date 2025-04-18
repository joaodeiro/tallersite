import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="mb-4">
              <img src="images/logo.png" alt="Taller" className="h-16" />
            </div>
            <p className="mb-4">
              Desenvolvemos soluções inteligentes personalizadas com foco em inovação,
              transparência e agilidade.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com/company/taller" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/taller" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Github"
                className="hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-white">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "#home" },
                { name: "Sobre", path: "#sobre" },
                { name: "Serviços", path: "#servicos" },
                { name: "Contato", path: "#contato" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-white">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-accent" />
                <span>Florianópolis, SC, Brasil</span>
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="h-5 w-5 mr-2 text-[#25D366]" />
                <a 
                  href="https://wa.me/554898230107" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +55 (48) 98230-0107
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                <a 
                  href="mailto:contato@taller.net.br" 
                  className="hover:text-accent transition-colors"
                >
                  contato@taller.net.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Taller. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/politica-de-privacidade" className="mr-4 hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
