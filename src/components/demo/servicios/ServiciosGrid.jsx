const servicios = [
  {
    title: "Landing Pages",
    desc: "Páginas optimizadas para captar leads y vender.",
  },
  {
    title: "Sitios Corporativos",
    desc: "Presencia profesional y sólida para tu marca.",
  },
  {
    title: "Optimización & SEO",
    desc: "Velocidad, posicionamiento y experiencia de usuario.",
  },
];

export default function ServiciosGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Servicios que impulsan tu negocio
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
