import { Link } from "react-router-dom";

export default function DemoProducto() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO PRODUCTO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-indigo-500/10 to-black" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* TEXTO */}
          <div>
            <span className="uppercase tracking-widest text-sky-400 text-sm">
              Demo · E-commerce
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Vendé tus productos como una{" "}
              <span className="text-sky-400">gran tienda online</span>
            </h1>

            <p className="text-white/70 mt-6 text-lg">
              Landing estilo Amazon / Mercado Libre, optimizada para
              conversión, confianza y compras rápidas.
            </p>

            <div className="flex gap-6 mt-10">
              <button className="px-8 py-4 rounded-full bg-sky-500 text-black font-semibold hover:bg-sky-400 transition">
                Comprar ahora
              </button>

              <Link
                to="/"
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition"
              >
                Volver
              </Link>
            </div>
          </div>

          {/* MOCK IMAGEN */}
          <div className="relative">
            <img
             src="/productos/remera1.jpg"
             alt="Producto destacado"
             className="w-full max-w-md h-[480px] object-cover rounded-3xl mx-auto"
            />


            <div className="absolute -bottom-6 -right-6 bg-slate-900 px-6 py-4 rounded-xl border border-white/10">
              ⭐ 4.8 | +2.300 ventas
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS ESTILO MARKETPLACE */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
            ¿Por qué este producto?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Envíos rápidos",
              "Pagos seguros",
              "Cambios sin costo",
              "Soporte 24/7",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-950 p-6 rounded-xl border border-white/10 text-center hover:border-sky-500/40 transition"
              >
                <div className="text-sky-400 text-2xl mb-4">✔</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Productos destacados
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-sky-500/40 transition"
              >
                <div className="h-48 bg-gradient-to-br from-sky-500/20 to-indigo-500/10 flex items-center justify-center">
                  <img
  src={`/productos/remera-${i}.jpg`}
  alt={`Producto ${i}`}
  className="w-full h-full object-cover"
/>

                </div>

                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    Producto #{i}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Descripción corta del producto
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sky-400 font-bold">$24.999</span>
                    <button className="text-sm px-4 py-2 rounded-full bg-sky-500 text-black hover:bg-sky-400 transition">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Opiniones de clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Excelente calidad, volvería a comprar.",
              "Llegó rápido y tal cual la descripción.",
              "Muy buena atención y producto.",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-slate-950 p-6 rounded-xl border border-white/10 text-white/80"
              >
                ⭐⭐⭐⭐⭐ <br />
                “{text}”
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-gradient-to-br from-sky-600/20 to-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Tu tienda puede verse así
        </h2>

        <p className="text-white/70 mb-10">
          Diseño profesional, lista para vender desde el día uno.
        </p>

        <a
          href="https://wa.me/543765112446"
          target="_blank"
          className="inline-block px-12 py-4 rounded-full bg-sky-500 text-black font-semibold text-lg hover:bg-sky-400 transition"
        >
          Quiero mi tienda
        </a>
      </section>

    </main>
  );
}
