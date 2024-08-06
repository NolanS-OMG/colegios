import Slider from "./Slider";
import Button from "./Button";

import { ExternalLink } from "lucide-react";

import { anuncios } from "../constants";

const AnuncioCard = ({ options }) => {
  return (
    <article id={`slider${options.id}`} className="w-full h-full relative bg-slate-900">
      <div className="absolute top-0 left-0 w-full h-full px-2 lg:px-24 flex flex-col z-10">
        <Button className="w-fit mt-auto p-4 lg:p-6 lg:pl-0 lg:pb-2 relative custom-scale-svg-hover" href="#home">
          <h4 className="text-slate-100 font-bold text-4xl lg:text-6xl roboto-slab tracking-wide">{options.title}</h4>
          <ExternalLink color="#f1f5f9" className="absolute top-0 right-0 scale-75 lg:scale-100" />
        </Button>
        <p className="hidden lg:block mt-1 mb-20 text-slate-100 text-sm">{options.description}</p>
      </div>
      <img src={options.image_url} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0" />
    </article>
  )
}

const Anuncios = () => {

  return (
    <section id="anuncios" className="custom-lg-vh z-0 pt-17 mt-12 lg:mt-0 custom-offset-mobile">
      <Slider className={`w-full lg:h-full aspect-square md:aspect-video lg:aspect-auto mx-auto`} arrayToMap={anuncios} Element={AnuncioCard} />
    </section>
  )
}

export default Anuncios;