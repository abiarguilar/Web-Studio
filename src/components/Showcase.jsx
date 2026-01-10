export default function Showcase() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-[#020617] via-[#020617] to-black text-white overflow-hidden">
      
      {/* Glow superior */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
          Resultados reales
        </span>

        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Resultados que{" "}
          <span className="text-cyan-400">se sienten</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-5 max-w-2xl mx-auto text-white/60 text-base md:text-lg">
          No hablamos de promesas. Hablamos de métricas, rendimiento y
          crecimiento real para negocios que buscan escalar.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition hover:border-cyan-400/40">
            <p className="text-5xl font-bold text-cyan-400">+120%</p>
            <p className="mt-3 text-white/80 font-medium">
              Incremento en conversiones
            </p>
            <p className="mt-2 text-sm text-white/50">
              Landings optimizadas para acción inmediata.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition hover:border-cyan-400/40">
            <p className="text-5xl font-bold text-cyan-400">-40%</p>
            <p className="mt-3 text-white/80 font-medium">
              Reducción en tiempos de carga
            </p>
            <p className="mt-2 text-sm text-white/50">
              Performance real en desktop y mobile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition hover:border-cyan-400/40">
            <p className="text-5xl font-bold text-cyan-400">3x</p>
            <p className="mt-3 text-white/80 font-medium">
              Más retención de usuarios
            </p>
            <p className="mt-2 text-sm text-white/50">
              Diseño, claridad y foco en experiencia.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
