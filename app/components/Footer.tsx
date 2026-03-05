import { Facebook, Instagram, Twitter, Youtube, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">TechCell</span>
                <span className="text-xs text-gray-400">Sua loja de confiança</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              A melhor loja de celulares da região. Qualidade, confiança e os melhores preços desde 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base md:text-lg">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-blue-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#marcas" className="hover:text-blue-400 transition-colors">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-blue-400 transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-blue-400 transition-colors">
                  Nossa Equipe
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base md:text-lg">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Venda de Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Assistência Técnica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Troca de Telas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Películas e Acessórios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Garantia Estendida
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base md:text-lg">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-400">Telefone:</span>
                <br />
                <a href="tel:1134567890" className="hover:text-blue-400 transition-colors">
                  (11) 3456-7890
                </a>
              </li>
              <li>
                <span className="text-gray-400">WhatsApp:</span>
                <br />
                <a href="tel:11987654321" className="hover:text-blue-400 transition-colors">
                  (11) 98765-4321
                </a>
              </li>
              <li>
                <span className="text-gray-400">E-mail:</span>
                <br />
                <a href="mailto:contato@techcell.com.br" className="hover:text-blue-400 transition-colors">
                  contato@techcell.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 TechCell. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Política de Troca
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
