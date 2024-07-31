import { anuncios } from "../constants";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "./Button";
import { useEffect, useState } from "react";

const Anuncios = () => {
  const [selectedSlide, setSelectedSlide] = useState(anuncios[0].id);
  const changeSlide = (slideOp) => {
    setSelectedSlide(slideOp.slide);
    const sliderContainer = document.getElementById("sliderContainer");
    const targetElement = document.getElementById(`slider${slideOp.slide}`);
    sliderContainer.scrollTo({
      left: targetElement.offsetLeft,
      behavior: "smooth"
    })
  }
  return (
    <section className="custom-lg-vh z-40">
      <div className="w-full lg:w-fit lg:h-full relative aspect-square lg:aspect-video my-8 mx-auto p-2 lg:p-12">
        <div id="sliderContainer" className="flex relative w-full h-full overflow-hidden slider rounded-lg border-2 border-slate-900">
          {anuncios.map(item => {
            return (
              <article key={`slider${item.id}`} id={`slider${item.id}`} className="-z-10 w-full h-full relative bg-slate-900">
                <div className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 left-0 w-full px-2 lg:px-12">
                  <h4 className="z-10 text-slate-100 font-bold text-3xl">{item.title}</h4>
                  <p className="z-10 text-slate-100">{item.description}</p>
                </div>
                <img src={item.image_url} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-70 -z-1" />
              </article>
            )
          })}
        </div>
        <div className="flex gap-x-4 absolute bottom-1.5 lg:bottom-20 left-1/2 -translate-x-1/2 z-20">
          {anuncios.map(item => {
            return (
              <Button
                key={`sliderButton${item.id}`}
                className={`w-3 h-3 p-1 rounded-full bg-white opacity-75 transition-all 
                ease-in-out duration-100 hover:opacity-100 hover:scale-110 
                ${selectedSlide === item.id ? "scale-110 opacity-100" : ""}`}
                onClick={changeSlide}
                onClickProps={{ slide: item.id }}
              ></Button>
            )
          })};
        </div>
      </div>
    </section>
  )
}

export default Anuncios;