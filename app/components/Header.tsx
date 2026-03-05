"use client"
import { Smartphone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-gray-200">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center relative mt-9">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">TechCell</span>
                <span className="text-xs text-gray-400">Sua loja de confiança</span>
              </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 ">
            <a
              href="#inicio"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Sobre Nós
            </a>
            <a
              href="#marcas"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Marcas
            </a>
            <a
              href="#categorias"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Categorias
            </a>
            <a
              href="#equipe"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Nossa Equipe
            </a>
            <a
              href="#contato"
              className="text-white hover:text-blue-600 transition font-medium delay-200 duration-300 ease-in-out hover:-translate-y-3"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Visite Nossa Loja
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-auto bg-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3 border-t bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/20 text-center mt-4">
            <a
              href="#inicio"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#marcas"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marcas
            </a>
            <a
              href="#categorias"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categorias
            </a>
            <a
              href="#equipe"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nossa Equipe
            </a>
            <a
              href="#contato"
              className="text-white hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-2">
              Visite Nossa Loja
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
