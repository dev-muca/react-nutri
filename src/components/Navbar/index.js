import { Link } from "react-router-dom";

export default function Title({ title }) {
  return (
    <div className="w-full bg-blue-600 text-white py-4 text-center sticky top-0 flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex gap-8 justify-center items-center">
        <Link to="/" className="hover:bg-blue-400 px-2 py-1 rounded duration-200">
          Inicio
        </Link>
        <Link to="/about" className="hover:bg-blue-400 px-2 py-1 rounded duration-200">
          Sobre
        </Link>
      </div>
    </div>
  );
}
