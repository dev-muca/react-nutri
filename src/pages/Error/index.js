import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="w-full text-center p-10">
        <h1 className="text-3xl">#404 - Ops, acho que você se perdeu...</h1>
        <br />
        <Link to="/" className="underline">
          Voltar ao inicio
        </Link>
      </div>
    </>
  );
}
