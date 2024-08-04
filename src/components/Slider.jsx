import { anuncios } from "../constants";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import Button from "./Button";
import { useEffect, useState } from "react";

const Slider = ({ className, interval = 5000, arrayToMap, Element, sliderId = "sliderContainer", dark = false, arrowTop = "top-1/2", center = false }) => {
  const [selectedSlide, setSelectedSlide] = useState(arrayToMap[0].id);

  const changeSlide = (slideOp) => {
    setSelectedSlide(slideOp.slide);
    const sliderContainer = document.getElementById(sliderId);
    const targetElement = document.getElementById(`slider${slideOp.slide}`);
    sliderContainer.scrollTo({
      left: targetElement.offsetLeft,
      behavior: "smooth"
    })
  }

  const nextSlide = () => {
    let actualIndex = arrayToMap.findIndex(item => item.id === selectedSlide);
    if (actualIndex + 1 >= arrayToMap.length) {
      actualIndex = 0;
    } else {
      actualIndex += 1;
    }
    changeSlide({ slide: arrayToMap[actualIndex].id });
  }

  const backSlide = () => {
    let actualIndex = arrayToMap.findIndex(item => item.id === selectedSlide);
    if (actualIndex - 1 < 0) {
      actualIndex = arrayToMap.length - 1;
    } else {
      actualIndex -= 1;
    }
    changeSlide({ slide: arrayToMap[actualIndex].id });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [selectedSlide]);

  return (
    <div className={`relative ${className}`}>
      <div id={sliderId} className="flex relative w-full h-full overflow-hidden slider">

        {arrayToMap.map(item => {
          return (
            <Element key={`slider${item.id}`} options={item} id={`slider${item.id}`} />
          )
        })}

      </div>

      <div className="hidden lg:flex justify-center gap-x-4 absolute bottom-0 lg:bottom-6 left-1/2 -translate-x-1/2 z-10">
        {arrayToMap.map(item => {
          return (
            <Button
              key={`sliderButton${item.id}`}
              className={`w-3 h-3 p-1 rounded-full ${dark ? "bg-slate-900" : "bg-white"} transition-all 
                ease-in-out duration-100 hover:opacity-100 hover:scale-110 m-auto 
                ${selectedSlide === item.id ? "scale-110 opacity-100" : "opacity-65"}`}
              onClick={changeSlide}
              onClickProps={{ slide: item.id }}
            ></Button>
          )
        })}
      </div>

      <Button className={`absolute ${arrowTop} ${center ? "left-1/4" : "left-1 lg:left-8"} -translate-y-1/2 w-fit h-fit p-4 lg:p-2 z-10 rounded-full ${dark ? "custom-arrow-hover-light" : "custom-arrow-hover"}`} onClick={backSlide}>
        <ChevronLeft color={`${dark ? "#0f172a" : "white"}`} size={40} />
      </Button>
      <Button className={`absolute ${arrowTop} ${center ? "right-1/4" : "right-1 lg:right-8"} -translate-y-1/2 w-fit h-fit p-4 lg:p-2 z-10 rounded-full ${dark ? "custom-arrow-hover-light" : "custom-arrow-hover"}`} onClick={nextSlide}>
        <ChevronRight color={`${dark ? "#0f172a" : "white"}`} size={40} />
      </Button>

    </div>
  )
}

export default Slider;