export default function DemoServicios() {
  const servicios = [
    {
      titulo: "Arquitectura Web Escalable",
      descripcion:
        "Diseñamos plataformas digitales sólidas, preparadas para crecer junto a tu negocio y soportar alto tráfico.",
    },
    {
      titulo: "Optimización de Performance y SEO Técnico",
      descripcion:
        "Mejoramos tiempos de carga, estructura técnica y posicionamiento para maximizar resultados medibles.",
    },
    {
      titulo: "Automatización de Procesos Digitales",
      descripcion:
        "Integramos formularios, CRM, WhatsApp y flujos automatizados para optimizar la captación de leads.",
    },
    {
      titulo: "Diseño UX orientado a conversión",
      descripcion:
        "Creamos experiencias claras y eficientes que reducen fricción y aumentan tasas de conversión.",
    },
  ];

  const metodologia = [
    {
      paso: "01",
      titulo: "Diagnóstico",
      texto:
        "Analizamos el contexto del negocio, objetivos y situación digital actual.",
    },
    {
      paso: "02",
      titulo: "Estrategia",
      texto:
        "Definimos una solución alineada a métricas, conversión y escalabilidad.",
    },
    {
      paso: "03",
      titulo: "Implementación",
      texto:
        "Desarrollamos la plataforma con foco en calidad, rendimiento y estabilidad.",
    },
    {
      paso: "04",
      titulo: "Optimización Continua",
      texto:
        "Medimos, iteramos y optimizamos para sostener resultados a largo plazo.",
    },
  ];

  return (
    <main className="bg-[#0B1220] text-slate-100">

      {/* HERO CORPORATIVO */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm">
              Soluciones Digitales Empresariales
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Soluciones digitales para empresas que buscan
              <span className="text-sky-400"> escalar con solidez</span>
            </h1>

            <p className="mt-6 text-slate-300 max-w-xl">
              Acompañamos a empresas y organizaciones en el diseño, desarrollo y
              optimización de plataformas digitales alineadas a objetivos de
              negocio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/543765112446"
                target="_blank"
                className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-sky-500/20"
              >
                Solicitar propuesta
              </a>

              <a
                href="https://www.instagram.com/studioweb_ar/"
                className="border border-sky-500 text-sky-400 hover:bg-sky-500/10 px-6 py-3 rounded-xl transition"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-sky-500/20 blur-3xl rounded-3xl"></div>
            <img
              src="/demo-servicios.png"
              alt="Soluciones digitales empresariales"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* INDICADORES DE CONFIANZA */}
      <section className="py-16 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-sky-400">+10</p>
            <p className="text-slate-400 text-sm">Años de experiencia</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-400">+120</p>
            <p className="text-slate-400 text-sm">Proyectos entregados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-400">LATAM & EU</p>
            <p className="text-slate-400 text-sm">Clientes internacionales</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-sky-400">Metodología</p>
            <p className="text-slate-400 text-sm">Validada y escalable</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicios orientados a resultados
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/80 backdrop-blur border border-slate-800 hover:border-sky-500/40 rounded-2xl p-6 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-sky-400">
                  {item.titulo}
                </h3>
                <p className="text-slate-300">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Metodología de trabajo
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {metodologia.map((m, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
              >
                <span className="text-sky-400 text-2xl font-bold">
                  {m.paso}
                </span>
                <h3 className="mt-4 font-semibold">{m.titulo}</h3>
                <p className="mt-2 text-slate-400 text-sm">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CORPORATIVO */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Hablemos sobre tu próximo proyecto digital
        </h2>
        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Evaluamos tu necesidad y te enviamos una propuesta clara, profesional y
          alineada a tus objetivos.
        </p>

        <div className="mt-8">
          <a
          href="https://wa.me/543765112446"
          target="_blank"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-sky-500/30"
          >
            Agendar reunión
          </a>
        </div>
      </section>

    </main>
  );
}
