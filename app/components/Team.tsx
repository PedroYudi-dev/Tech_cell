import { Card } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      bio: "15 anos de experiência no mercado de tecnologia",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE4NTIwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Mariana Santos",
      role: "Gerente de Vendas",
      bio: "Especialista em atendimento ao cliente e relacionamento",
      image: "https://images.unsplash.com/photo-1758520387469-30e8ed486f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2hvcHBpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTg1MjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Roberto Oliveira",
      role: "Técnico Especialista",
      bio: "Certificado em manutenção de todas as principais marcas",
      image: "https://images.unsplash.com/photo-1769763227060-726b7b926bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzcxODQyNDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ana Paula Costa",
      role: "Consultora de Vendas",
      bio: "Ajuda clientes a encontrar o smartphone perfeito",
      image: "https://images.unsplash.com/photo-1758520387491-f370ae7a1122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc3RvcmUlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzE4NTIwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="equipe" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Conheça Nossa Equipe
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Profissionais qualificados e apaixonados por tecnologia, prontos para oferecer 
            o melhor atendimento e suporte para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {/* <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm md:text-base text-blue-600 font-medium">{member.role}</p>
                </div>
                <p className="text-xs md:text-sm text-gray-600">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-3 pt-3">
                  <button className="w-9 h-9 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Card className="p-6 md:p-10 bg-white max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Quer fazer parte do nosso time?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Estamos sempre em busca de pessoas talentosas e apaixonadas por tecnologia 
              para se juntar à nossa equipe.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors text-sm md:text-base">
              Trabalhe Conosco
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
