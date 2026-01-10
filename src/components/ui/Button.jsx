export default function Button({ children, variant = "primary" }) {
  const base = "px-8 py-4 rounded-full font-semibold transition";

  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "border border-white/30 hover:bg-white/10 text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
