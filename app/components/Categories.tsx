"use client"

import { useEffect } from "react";
import AOS from "aos";
import { Card } from "./ui/card";
import {
  Smartphone,
  Zap,
  DollarSign,
  Trophy,
  Briefcase,
  Heart,
} from "lucide-react";
import ButtonAnimate from "../../components/button-animate";

export function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // tempo da animação
      once: false, // anima só uma vez
    });
  }, []);
  const categories = [
    {
      icon: Trophy,
      name: "Premium",
      description: "Smartphones top de linha com as últimas tecnologias",
      examples: "iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Zap,
      name: "Intermediário",
      description: "Ótimo desempenho com preço acessível",
      examples: "Galaxy A54, Redmi Note 13, Moto G84",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: DollarSign,
      name: "Entrada",
      description: "Perfeitos para primeiro smartphone ou uso básico",
      examples: "Galaxy A14, Redmi A3, Moto E13",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Briefcase,
      name: "Empresarial",
      description: "Segurança e produtividade para profissionais",
      examples: "Samsung Knox, BlackBerry, iPhone Pro",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      icon: Smartphone,
      name: "Gaming",
      description: "Máximo desempenho para jogos móveis",
      examples: "ROG Phone 8, Black Shark 5, RedMagic 9",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Heart,
      name: "Seniors",
      description: "Interface simples e fácil de usar",
      examples: "Modelos com tela grande e bateria duradoura",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section id="categorias" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Categorias de Celulares
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Não importa o seu perfil ou necessidade, temos o smartphone ideal
            para você. Nossos especialistas podem ajudar a encontrar o modelo
            perfeito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                data-aos="flip-left"
                key={index}
                className="p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden relative"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 ${category.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className={`w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}
                      style={{ WebkitTextStroke: "1px currentColor" }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div
                      className={`p-3 md:p-4 ${category.bgColor} rounded-lg`}
                    >
                      <p className="text-xs md:text-sm font-medium text-gray-700">
                        <span className="font-semibold">Exemplos:</span>{" "}
                        {category.examples}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-12 md:mt-16 text-center">
          <Card className="p-6 md:p-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Não sabe qual modelo escolher?
            </h3>
            <p className="text-sm md:text-base text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para te ajudar a escolher o
              smartphone ideal de acordo com suas necessidades e orçamento.
            </p>
            <ButtonAnimate className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors text-sm md:text-base" />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors text-sm md:text-base">
              Fale com um Especialista
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
