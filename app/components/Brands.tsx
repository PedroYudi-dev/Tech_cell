import { Card } from "./ui/card";

export function Brands() {
  const brands = [
    {
      name: "Apple",
      src: "/Apple.png",
      description: "iPhone - Inovação e Design",
    },
    {
      name: "Samsung",
      src: "/Samsung.png",
      description: "Galaxy - Tecnologia Avançada",
    },
    {
      name: "Xiaomi",
      src: "/Xiaomi.png",
      description: "Xiaomi - Custo-Benefício Premium",
    },
    {
      name: "Motorola",
      src: "/Morotola_marca.png",
      description: "Motorola - Durabilidade e Desempenho",
    },
    {
      name: "Google",
      src: "/marca_google.png",
      description: "Google - Pixel - Fotografia e IA",
    },
    {
      name: "Realme",
      src: "/Realme_logo.png",
      description: "Realme - Potência Acessível",
    },
    {
      name: "ASUS",
      src: "/Asus_Marca.png",
      description: "ASUS- ROG - Gaming Performance",
    },
    {
      name: "OnePlus",
      src: "/onePlu-marca.png",
      description: "OnePlus - Velocidade e Fluidez",
    },
  ];

  return (
    <section
      id="marcas"
      className="relative overflow-hidden py-16 md:py-24 bg-gray-50"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover sm:object-fill"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/open-box-apple.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4 md:mb-6">
            Marcas que Trabalhamos
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Somos parceiros oficiais das principais marcas de smartphones do
            mundo. Produtos originais com garantia e melhor preço.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-5 p-6 md:p-8 bg-white/3 backdrop-blur-md rounded-xl border border-white/20"
            >
              <div className="text-center items-center space-y-3 md:space-y-4">
                <div className="justify-center items-center flex md:text-5xl group-hover:scale-110 transition-transform">
                  {brand.src && (<img className="w-[90px]" src={brand.src} alt={brand.name}/>)}
                </div>
                {/* <h3 className="text-lg md:text-xl font-bold text-gray-300">
                  {brand.name}
                </h3> */}
                <p className="text-xs md:text-sm text-gray-400">
                  {brand.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center"> 
          <div className="inline-flex flex-col items-center gap-4 p-6 md:p-8 bg-white/3 backdrop-blur-md border border-white/20 rounded-2xl">
            <p className="text-base md:text-lg font-semibold text-gray-300">
              🏆 Revendedor Autorizado e Certificado
            </p>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl">
              Todos os nossos produtos são originais, com nota fiscal e garantia
              oficial do fabricante. Sua compra 100% segura e protegida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
