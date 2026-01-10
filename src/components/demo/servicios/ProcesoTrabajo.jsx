const pasos = [
  "Análisis de tu negocio",
  "Diseño y estrategia",
  "Desarrollo y optimización",
  "Entrega y soporte",
];

export default function ProcesoTrabajo() {
  return (
    <section className="py-24 bg-white/50">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center">
          Nuestro proceso
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          {pasos.map((p, i) => (
            <div key={i}>
              <div className="w-14 h-14 mx-auto rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <p className="mt-4 font-medium">{p}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
