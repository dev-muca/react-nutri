import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";

function App() {
  const { id } = useParams();
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const URL = "https://sujeitoprogramador.com/rn-api/?api=posts";
      const response = await fetch(URL, { method: "GET" });
      const json = await response.json();
      setNutri(json[id]);
    }

    loadApi();
  }, [id]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-zinc-100">
      <Card key={nutri.id} id={nutri.id} titulo={nutri.titulo} subtitulo={nutri.subtitulo} capa={nutri.capa} />
    </div>
  );
}

export default App;
