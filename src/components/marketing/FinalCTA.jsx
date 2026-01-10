import Button from "../ui/Button";

export default function FinalCTA({ text, button }) {
  return (
    <section className="py-32 bg-blue-500 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold">{text}</h2>
      <div className="mt-10 flex justify-center">
        <Button>{button}</Button>
      </div>
    </section>
  );
}
