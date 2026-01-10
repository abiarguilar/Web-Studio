export default function ResultsSection() {
  const stats = [
    {
      label: "Sistemas lanzados",
      value: "50+",
      description:
        "Landings, funnels y ecosistemas digitales activos.",
      badge: "En producción",
    },
    {
      label: "Mercados",
      value: "8+",
      description:
        "Proyectos ejecutados en LATAM, EE.UU. y Europa.",
      badge: "Internacional",
    },
    {
      label: "Confianza cliente",
      value: "4.9/5",
      description:
        "Experiencias premium con resultados medibles.",
      badge: "Rating real",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white overflow-hidden">

      {/* Glow premium */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/20 text-emerald-400 text-xs tracking-wide">
          ● Performance comprobada
        </span>

        <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
          Resultados diseñados para{" "}
          <span className="text-emerald-400">escalar negocios</span>
        </h2>

        <p className="mt-5 text-white/65 max-w-2xl mx-auto text-base md:text-lg">
          No vendemos diseño. Creamos activos digitales que generan
          posicionamiento, leads y ventas.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-9 transition hover:border-emerald-400/40"
          >
            {/* Badge */}
            <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
              {stat.badge}
            </span>

            <p className="text-xs text-white/50 uppercase tracking-widest">
              {stat.label}
            </p>

            <h3 className="mt-5 text-5xl font-semibold text-white">
              {stat.value}
            </h3>

            <p className="mt-4 text-white/65 text-sm leading-relaxed">
              {stat.description}
            </p>

            {/* Barra premium */}
            <div className="mt-8 h-[2px] w-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 transition-all duration-700 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
