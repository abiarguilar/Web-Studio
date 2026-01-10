export default function DemoCaptacion() {
  return (
    <main className="bg-[#020403] text-white antialiased">

      {/* HERO — VIDEO EDITORIAL */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/136267-764387684_small.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <span className="block text-xs tracking-[0.35em] text-emerald-400 uppercase mb-12">
            Programa privado
          </span>

          <h1 className="text-[3.8rem] md:text-[5rem] leading-[1.05] font-light">
            Claridad.
            <br />
            Dirección.
            <br />
            Decisión.
          </h1>

          <p className="mt-12 max-w-xl text-lg text-white/60">
            Mentoría estratégica para profesionales que no necesitan motivación,
            sino estructura, foco y criterio para escalar.
          </p>

          <div className="mt-20 flex items-center gap-10">
            <a
              href="/aplicacion"
              className="px-16 py-6 rounded-full bg-emerald-500 text-black text-xs tracking-widest hover:bg-emerald-400 transition"
            >
              SOLICITAR ACCESO
            </a>

            <span className="text-xs text-white/40">
              Acceso por aplicación · Cupos limitados
            </span>
          </div>
        </div>
      </section>

      {/* PAUSA EDITORIAL */}
      <section className="py-40 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl leading-relaxed text-white/85">
            No optimizamos ideas.
            <br />
            Optimizamos decisiones.
          </p>
        </div>
      </section>

      {/* BLOQUE SUISSE GRID */}
      <section className="py-32 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24">

          <div>
            <span className="text-xs text-emerald-400 tracking-widest">
              01
            </span>
            <h3 className="mt-6 text-xl">Análisis real</h3>
            <p className="mt-6 text-white/60 leading-relaxed">
              Negocio, contexto y decisiones actuales.
              Sin teorías innecesarias.
            </p>
          </div>

          <div>
            <span className="text-xs text-emerald-400 tracking-widest">
              02
            </span>
            <h3 className="mt-6 text-xl">Estrategia</h3>
            <p className="mt-6 text-white/60 leading-relaxed">
              Dirección clara basada en recursos,
              objetivos y tiempos reales.
            </p>
          </div>

          <div>
            <span className="text-xs text-emerald-400 tracking-widest">
              03
            </span>
            <h3 className="mt-6 text-xl">Acompañamiento</h3>
            <p className="mt-6 text-white/60 leading-relaxed">
              Decisiones guiadas durante la ejecución,
              no solo planes.
            </p>
          </div>

        </div>
      </section>

      {/* BLOQUE VISUAL SILENCIOSO */}
      <section className="py-36 px-8 bg-[#010202]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">

          <img
            src="/demo-servicios.png"
            alt="Proceso estratégico"
            className="rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          />

          <div>
            <h2 className="text-3xl leading-snug mb-12">
              Menos ruido.
              <br />
              Más control.
            </h2>

            <ul className="space-y-6 text-lg text-white/65">
              <li>— Enfoque estratégico</li>
              <li>— Prioridades claras</li>
              <li>— Decisiones medibles</li>
              <li>— Visión de mediano plazo</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CIERRE FIRMA */}
      <section className="py-44 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-16">
            No es para todos.
            <br />
            Tampoco debería serlo.
          </h2>

          <a
            href="/aplicacion"
            className="inline-block px-20 py-7 rounded-full border border-white/40 text-xs tracking-widest hover:border-white transition"
          >
            APLICAR AL PROGRAMA
          </a>

          <p className="mt-12 text-xs text-white/40">
            Programa privado · Sin ventas masivas
          </p>
        </div>
      </section>

    </main>
  );
}
