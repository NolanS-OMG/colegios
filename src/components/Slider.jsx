import { anuncios } from "../constants";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import Button from "./Button";
import { useEffect, useState } from "react";

const Slider = ({ className, interval = 5000 }) => {
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

  const nextSlide = () => {
    let actualIndex = anuncios.findIndex(item => item.id === selectedSlide);
    if (actualIndex + 1 >= anuncios.length) {
      actualIndex = 0;
    } else {
      actualIndex += 1;
    }
    changeSlide({ slide: anuncios[actualIndex].id });
  }

  const backSlide = () => {
    let actualIndex = anuncios.findIndex(item => item.id === selectedSlide);
    if (actualIndex - 1 < 0) {
      actualIndex = anuncios.length - 1;
    } else {
      actualIndex -= 1;
    }
    changeSlide({ slide: anuncios[actualIndex].id });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [selectedSlide]);

  return (
    <div className={`relative ${className}`}>
      <div id="sliderContainer" className="flex relative w-full h-full overflow-hidden slider">

        {anuncios.map(item => {
          return (
            <article key={`slider${item.id}`} id={`slider${item.id}`} className="w-full h-full relative bg-slate-900">
              <div className="absolute top-0 left-0 w-full h-full px-2 lg:px-24 flex flex-col z-10">
                <Button className="w-fit mt-auto p-4 lg:p-6 lg:pl-0 lg:pb-2 relative custom-scale-svg-hover" href="#home">
                  <h4 className="text-slate-100 font-bold text-4xl lg:text-6xl roboto-slab tracking-wide">{item.title}</h4>
                  <ExternalLink color="#f1f5f9" className="absolute top-0 right-0 scale-75 lg:scale-100" />
                </Button>
                <p className="hidden lg:block mt-1 mb-20 text-slate-100 text-sm">{item.description}</p>
              </div>
              <img src={item.image_url} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0" />
            </article>
          )
        })}

      </div>

      <div className="hidden lg:flex justify-center gap-x-4 absolute bottom-0 lg:bottom-6 left-1/2 -translate-x-1/2 z-10">
        {anuncios.map(item => {
          return (
            <Button
              key={`sliderButton${item.id}`}
              className={`w-3 h-3 p-1 rounded-full bg-white transition-all 
                ease-in-out duration-100 hover:opacity-100 hover:scale-110 m-auto 
                ${selectedSlide === item.id ? "scale-110 opacity-100" : "opacity-65"}`}
              onClick={changeSlide}
              onClickProps={{ slide: item.id }}
            ></Button>
          )
        })};
      </div>

      <Button className={`absolute top-1/2 left-1 lg:left-8 -translate-y-1/2 w-fit h-fit p-4 lg:p-2 z-10 rounded-full custom-arrow-hover`} onClick={backSlide}>
        <ChevronLeft color="white" size={40} />
      </Button>
      <Button className={`absolute top-1/2 right-1 lg:right-8 -translate-y-1/2 w-fit h-fit p-4 lg:p-2 z-10 rounded-full custom-arrow-hover`} onClick={nextSlide}>
        <ChevronRight color="white" size={40} />
      </Button>

    </div>
  )
}

export default Slider;