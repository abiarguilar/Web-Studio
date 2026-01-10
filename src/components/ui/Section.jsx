export default function Section({ children }) {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
