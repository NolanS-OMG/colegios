import About from "./components/About";
import Anuncios from "./components/Anuncios";
import OfertaEducativa from "./components/OfertaEducativa";
import Portrait from "./components/Portrait";

function HomePage() {
  return (
    <>
      <Portrait />
      <Anuncios />
      <About />
      <OfertaEducativa />
    </>
  )
}

export default HomePage;