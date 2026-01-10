import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Texto principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          ¿Una landing así funcionaría para tu negocio?
        </h2>

        <p className="text-white/70 mt-6 max-w-2xl mx-auto">
          Te muestro una propuesta clara, sin vueltas y adaptada a lo que hacés.
          Solo necesitás unos minutos.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">

          {/* CTA fuerte */}
          <a
            href="https://wa.me/543765112446"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition hover:scale-105"
          >
            Consultoria gratis vía WhatsApp
          </a>

          {/* CTA suave */}
          <Link
            to="/ejemplos"
            className="px-10 py-4 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition"
          >
            Ver ejemplos reales
          </Link>
        </div>

        {/* Refuerzo */}
        <p className="text-white/40 text-sm mt-8">
          Sin compromiso · Respuesta rápida · Propuesta personalizada
        </p>

      </div>
    </section>
  );
}
