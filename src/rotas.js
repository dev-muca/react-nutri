import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Post from "./pages/Post";
import Error from "./pages/Error";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar title="React Nutri" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
