import About from "./components/About";
import Anuncios from "./components/Anuncios";
import OfertaEducativa from "./components/OfertaEducativa";
import Portrait from "./components/Portrait";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useUserContext } from "./context/UserContext";

function HomePage() {
  const [user, setUser] = useUserContext();
  useEffect(() => {
    if (user) {
      setUser(null);
    }
  }, [user])
  return (
    <>
      <Portrait />
      <Anuncios />
      <About />
      <OfertaEducativa />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage;