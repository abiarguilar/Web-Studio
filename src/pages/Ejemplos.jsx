import { Link } from "react-router-dom";

export default function Ejemplos() {
  const ejemplos = [
    {
      title: "Pagina para servicios",
      desc: "Más consultas desde WhatsApp y formularios.",
      img: "/mockup.webp",
      path: "/demo-servicios",
    },
    {
      title: "Pagina de productos",
      desc: "Pensada para vender un producto digital.",
      img: "/productos/remera1.jpg",
      path: "/demo-producto",
    },
    {
      title: "Pagina de captación",
      desc: "Ideal para anuncios y generación de leads.",
      img: "/captacion.jpg",
      path: "/demo-captacion",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Ejemplos reales de landings
          </h1>
          <p className="text-white/70 mt-6">
            Diseños pensados para convertir visitantes en clientes.
            Elegí el estilo que más se parece a tu negocio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {ejemplos.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500 transition"
            >
              {/* Imagen */}
              <img
                src={item.img}
                alt={item.title}
                className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>

              {/* Contenido */}
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-white/70 mt-3">{item.desc}</p>

                <span className="inline-block mt-6 text-blue-400 font-medium group-hover:translate-x-2 transition">
                  Ver demo →
                </span>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 pointer-events-none group-hover:shadow-[0_0_80px_rgba(56,189,248,0.25)] transition"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
