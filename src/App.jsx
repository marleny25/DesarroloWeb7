import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Home } from "./paginas/home";
import { Imagen1 } from "./wallpaper/imagen1";
import { Imagen2 } from "./wallpaper/imagen2";
import { Imagen3 } from "./wallpaper/imagen3";
import { Imagen4 } from "./wallpaper/imagen4";
import { Imagen5 } from "./wallpaper/imagen5";
import { Imagen6 } from "./wallpaper/imagen6";
import { Imagen7 } from "./wallpaper/imagen7";
import { Imagen8 } from "./wallpaper/imagen8";
import { Imagen9 } from "./wallpaper/imagen9";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wallpaper/imagen1" element={<Imagen1/>}/>
          <Route path="/wallpaper/imagen2" element={<Imagen2/>}/>
          <Route path="/wallpaper/imagen3" element={<Imagen3/>}/>
          <Route path="/wallpaper/imagen4" element={<Imagen4/>}/>
          <Route path="/wallpaper/imagen5" element={<Imagen5/>}/>
          <Route path="/wallpaper/imagen6" element={<Imagen6/>}/>
          <Route path="/wallpaper/imagen7" element={<Imagen7/>}/>
          <Route path="/wallpaper/imagen8" element={<Imagen8/>}/>
          <Route path="/wallpaper/imagen9" element={<Imagen9/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
