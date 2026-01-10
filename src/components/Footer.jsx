export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white pt-20 pb-10">
      
      {/* Glow decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/20 blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold mb-4">DigitalPro</h3>
          <p className="text-white/70 leading-relaxed">
            Creamos landing pages modernas, rápidas y optimizadas para vender.
            Diseño + estrategia + conversión.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Secciones</h4>
          <ul className="space-y-3 text-white/70">
            <li><a href="#inicio" className="hover:text-sky-400 transition">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-sky-400 transition">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-sky-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contacto</h4>
          <ul className="space-y-3 text-white/70">
            <li>📍 Posadas, Misiones</li>
            <li>
              <a
                href="https://wa.me/543765112446"
                target="_blank"
                className="text-sky-400 hover:underline"
              >
                WhatsApp directo
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-white/50 text-sm">
        © 2025 DigitalPro. Todos los derechos reservados.
      </div>
    </footer>
  );
}
