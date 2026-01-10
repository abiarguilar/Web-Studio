export default function FeedbackServicios() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center">
          Clientes satisfechos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow"
            >
              <p className="italic">
                “Mi sitio empezó a generar consultas desde la primera semana.”
              </p>
              <p className="mt-4 font-semibold">
                — Cliente real
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
