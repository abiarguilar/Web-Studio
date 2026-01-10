export default function MediaSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Convertí visitas en clientes
        </h2>

        <p className="mt-6 text-white/80 max-w-xl mx-auto">
          Landing pages pensadas para resultados reales.
        </p>

        
      </div>

    </section>
  );
}
