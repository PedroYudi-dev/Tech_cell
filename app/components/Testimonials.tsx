import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "João Pedro",
      role: "Cliente desde 2020",
      text: "Melhor loja de celulares que já conheci! O atendimento é excepcional e os preços são justos. Já comprei 3 celulares aqui e sempre volto.",
      rating: 5,
    },
    {
      name: "Maria Eduarda",
      role: "Cliente desde 2019",
      text: "Equipe super atenciosa e prestativa. Me ajudaram a escolher o celular ideal dentro do meu orçamento. Super recomendo!",
      rating: 5,
    },
    {
      name: "Ricardo Almeida",
      role: "Cliente desde 2021",
      text: "Produtos originais, garantia respeitada e suporte técnico de qualidade. Confiança total nesta loja!",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Cliente desde 2022",
      text: "Atendimento diferenciado! Explicaram todas as funcionalidades do meu novo iPhone com muita paciência. Adorei!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="w-8 h-8 md:w-10 md:h-10" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 md:mt-16 text-center">
          <Card className="inline-flex flex-col items-center gap-3 md:gap-4 p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 md:w-10 md:h-10 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl md:text-4xl font-bold text-gray-900">4.9</span>
              <span className="text-base md:text-lg text-gray-600">de 5.0</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              Baseado em <span className="font-semibold text-gray-900">2.547 avaliações</span> no Google
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
