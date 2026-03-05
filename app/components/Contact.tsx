import { Card } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Visite Nossa Loja
          </h2>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para atender você. Venha conhecer nossa loja ou entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Rua das Tecnologias, 1234
                    <br />
                    Centro - São Paulo, SP
                    <br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Telefone</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    (11) 3456-7890
                    <br />
                    (11) 98765-4321 (WhatsApp)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Horário de Funcionamento</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Segunda a Sexta: 9h às 19h
                    <br />
                    Sábado: 9h às 18h
                    <br />
                    Domingo: 10h às 16h
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">E-mail</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    contato@techcell.com.br
                    <br />
                    vendas@techcell.com.br
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  placeholder="(11) 98765-4321"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar você?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg py-5 md:py-6"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
