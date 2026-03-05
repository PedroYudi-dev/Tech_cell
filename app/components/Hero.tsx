"use client"
import { Button } from "./ui/button";
import { MapPin, Clock, Phone} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // tempo da animação
      once: false, // anima só uma vez
    });
  }, []);
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Iphone.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      <div className="relative z-10 flex min-h-screen items-center pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
            <div data-aos="fade-right" className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="rounded-full border border-blue-300/40 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-white">
                    Desde 2010 no mercado
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Bem-vindo a
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    TechCell
                  </span>
                </h1>

                <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                  A maior e mais completa loja de celulares da região.
                  Oferecemos as melhores marcas, atendimento especializado e
                  suporte tecnico de qualidade.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-600 text-base text-white hover:bg-blue-700 transition delay-200 duration-300 ease-in-out hover:-translate-x-5"
                >
                  <a href="https://www.instagram.com/anjucelcelulares/">
                    Conheca Nossa Loja
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-base text-white hover:bg-white/20 transition delay-200 duration-300 ease-in-out hover:-translate-x-[-20px]"
                >
                  Fale Conosco
                </Button>
              </div>

              {/* <div className="grid gap-4 pt-6 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg bg-white/90 p-4 shadow-sm">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Localizacao
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      Centro da Cidade
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white/90 p-4 shadow-sm">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Horario
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      Seg-Sex: 9h-19h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-white/90 p-4 shadow-sm">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Telefone
                    </p>
                    <p className="mt-1 text-xs text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-800/50 to-cyan-500/50 opacity-90 blur-3xl" />
              {/* <video
                className="relative z-10 h-auto w-full rounded-3xl border border-white/25 shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/open-box-apple.mp4" type="video/mp4" />
              </video> */}
              {/* <ImageWithFallback
                src="/iphone17_imagem_banner.jpeg"
                alt="Interior da loja TechCell"
                className="relative z-10 h-auto w-full rounded-3xl border border-white/25 shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
