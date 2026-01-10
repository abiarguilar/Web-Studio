import Button from "../ui/Button";

export default function HeroBase({ title, subtitle, primary, secondary }) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="text-white/70 mt-6 text-lg">{subtitle}</p>

        <div className="flex justify-center gap-6 mt-10">
          <Button>{primary}</Button>
          <Button variant="secondary">{secondary}</Button>
        </div>
      </div>
    </section>
  );
}
