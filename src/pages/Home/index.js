import { useEffect, useState } from "react";
import Card from "../../components/Card";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const URL = "https://sujeitoprogramador.com/rn-api/?api=posts";
      const response = await fetch(URL, { method: "GET" });
      const json = await response.json();
      setNutri(json);
    }

    loadApi();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-100">
      {nutri.map((post) => (
        <Card key={post.id} id={post.id} titulo={post.titulo} subtitulo={post.subtitulo} capa={post.capa} />
        // <article key={post.id} className="flex flex-col justify-center w-[700px] shadow rounded p-4 my-8">
        //   <strong className="text-xl mb-4 w-full text-center">{post.titulo}</strong>

        //   <img src={post.capa} alt={post.titulo} />

        //   <p className="m-4 text-justify">{post.subtitulo}</p>

        //   <a
        //     className="bg-none rounded text-blue-500 border  border-blue-500 p-2 flex justify-center items-center font-bold"
        //     href={"/post/" + (post.id - 1)}
        //   >
        //     Ler sobre
        //   </a>
        // </article>
      ))}
    </div>
  );
}

export default App;
