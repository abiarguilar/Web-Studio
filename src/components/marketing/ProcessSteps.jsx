import Section from "../ui/Section";

export default function ProcessSteps() {
  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-12">
        Cómo funciona
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {["Analizamos", "Diseñamos", "Publicamos"].map((step, i) => (
          <div key={i} className="text-center">
            <div className="text-blue-400 text-4xl font-bold mb-4">
              {i + 1}
            </div>
            <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
