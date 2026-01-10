export default function SocialProof() {
  const feedbacks = [
    {
      text: "Tenía que explicar mi servicio muchas veces por WhatsApp. Con la landing, la gente entiende mejor antes de escribir.",
      name: "Emprendedor independiente",
      role: "Servicios profesionales",
      metric: "Menos tiempo explicando",
    },
    {
      text: "Buscaba algo simple pero serio. La página transmite confianza desde el primer momento.",
      name: "Negocio local",
      role: "Comercio y servicios",
      metric: "Mejor primera impresión",
    },
    {
      text: "La estructura guía al usuario sin distraerlo. Todo tiene un sentido.",
      name: "Proyecto digital",
      role: "Producto online",
      metric: "Más claridad",
    },
  ];

  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-3xl font-semibold text-white mb-16">
          Resultados reales en proyectos reales
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-black font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="text-white font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-white/50 text-xs">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Texto */}
              <p className="text-white/80 text-sm leading-relaxed">
                “{item.text}”
              </p>

              {/* Métrica */}
              <span className="inline-block mt-6 text-xs px-3 py-1 rounded-full bg-white/10 text-white/60">
                {item.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
