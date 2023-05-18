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
      ))}
    </div>
  );
}

export default App;
