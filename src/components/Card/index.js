export default function Card({ id, titulo, subtitulo, capa }) {
  return (
    <article className="bg-white flex flex-col justify-center w-[700px] shadow rounded p-4 my-8">
      <strong className="text-xl mb-4 w-full text-center">{titulo}</strong>

      <img src={capa} alt={titulo} className="border rounded-md overflow-hidden" />

      <p className="m-4 text-justify">{subtitulo}</p>

      <a
        className="bg-none rounded text-blue-500 border border-blue-500 duration-200 hover:bg-blue-500 hover:text-white p-2 flex justify-center items-center font-bold"
        href={"/post/" + (id - 1)}
      >
        Ler sobre
      </a>
    </article>
  );
}
