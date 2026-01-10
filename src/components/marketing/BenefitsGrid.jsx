import Section from "../ui/Section";

export default function BenefitsGrid({ items }) {
  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-white/70 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
