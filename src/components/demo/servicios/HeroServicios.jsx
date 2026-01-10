export default function HeroServicios() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Creamos sitios web que convierten visitantes en clientes
          </h1>

          <p className="mt-6 text-lg text-slate-700">
            Diseño profesional, velocidad optimizada y enfoque en resultados
            para negocios reales.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition">
              Solicitar propuesta
            </button>
            <button className="border border-sky-600 px-8 py-4 rounded-full font-semibold">
              Ver trabajos
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/public/mockup.webp"
            alt="Servicio web profesional"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
