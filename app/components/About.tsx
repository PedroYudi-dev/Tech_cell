"use client"

import { Award, Users, Heart, TrendingUp } from "lucide-react";
import { Card } from "./ui/card"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  const stats = [
    { icon: Users, value: "50.000+", label: "Clientes Atendidos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
    { icon: Heart, value: "4.8/5", label: "Avaliação Média" },
    { icon: TrendingUp, value: "98%", label: "Clientes Satisfeitos" },
  ];

  useEffect(() => {
      AOS.init({
        duration: 1500, // tempo da animação
        once: false, // anima só uma vez
      });
    }, []);

  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-16 md:py-24 bg-radial-[at_55%_50%] from-gray-800 to-zinc-900 to-75%"
    >
      <div
        data-aos="fade-left"
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4 md:mb-6">
            Sobre a AnjuCell
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            Somos uma loja de venda de celulares novos e seminovos,
            especializados em assistência técnica e venda de acessórios, estamos
            a mais de 15 anos no mercado, Sempre prezando pelo respeito e
            honestidade com nossos todos clientes. Entregamos segurança na
            compra e um atendimento personalizado e atencioso do inicio ao
            final.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-12 md:mb-16 ">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-5  p-6 md:p-8 text-center  bg-white/5 backdrop-blur-md rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-5 p-6 md:p-8 bg-gradient-to-br bg-white/5 backdrop-blur-md rounded-xl border border-white/20 ">
            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-3">
              Nossa Missão
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Proporcionar acesso à tecnologia móvel de qualidade, com
              atendimento humanizado e preços justos para todos.
            </p>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-5 p-6 md:p-8 bg-gradient-to-br bg-white/5 backdrop-blur-md rounded-xl border border-white/20 ">
            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">👁️</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-3">
              Nossa Visão
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Ser reconhecida como a melhor e mais confiável loja de smartphones
              do Brasil, referência em inovação e atendimento.
            </p>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-5 p-6 md:p-8 bg-gradient-to-br bg-white/5 backdrop-blur-md rounded-xl border border-white/20 ">
            <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">💎</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-3">
              Nossos Valores
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Transparência, compromisso com qualidade, respeito ao cliente e
              busca constante pela excelência em tudo que fazemos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
