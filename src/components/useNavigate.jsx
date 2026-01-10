import { useNavigate } from "react-router-dom";

export default function MediaSection() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/demo-captacion")}
      className="px-10 py-4 bg-sky-500 rounded-full"
    >
      Empezar ahora
    </button>
  );
}
