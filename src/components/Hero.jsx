export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* COLUMNA IZQUIERDA */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            ⚡ Paginas optimizadas para ventas
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Diseñamos tu pagina que convierten <br />
            <span className="text-sky-400">visitas en clientes</span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl">
            Páginas rápidas, modernas y enfocadas en resultados reales.
            Ideal para servicios, productos o captación por WhatsApp.
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/studioweb_ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
            >
              Instagram
            </a>

            <a
              href="https://www.instagram.com/_abiarguilar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition"
            >
              Instagram Personal
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="hidden md:block">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"></div>
          <img
            src="/public/hero.webp"
            alt="Landing profesional"
            className="w-full object-cover hover:scale-105 transition"
          />
        </div>

      </div>
    </section>
  );
}
