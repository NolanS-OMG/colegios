import NivelEducativoCard from "./NivelEducativoCard";
import TitleWithBorder from "./TitleWithBorder";

import { reviews } from "../constants";
import Slider from "./Slider";

import { Star, StarHalf } from "lucide-react";

const StarRating = ({ className, size = 24, rate = 10, id }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex gap-px">
        {Array.from({ length: 5 }, (_, index) => (
          <Star fill="rgb(15 118 110 / 0.2)" strokeWidth={0} key={`star${id}${index}`} size={size} />
        ))}
      </div>
      <div className="flex gap-px absolute top-0">
        {Array.from({ length: Math.floor(rate / 2) }, (_, index) => (
          <Star fill="rgb(15 118 110 / 0.5)" strokeWidth={0} key={`star${id}${index}`} size={size} />
        ))}
        {rate % 2 === 1 && <StarHalf fill="rgb(15 118 110 / 0.5)" strokeWidth={0} size={size} />}
      </div>
    </div>
  )
}

const Review = ({ options, id }) => {
  return (
    <div key={options.id} id={id} className="w-80 h-full pt-4 pb-14">
      <article className="bg-slate-50 h-full shadow px-3 py-2">
        <div className="flex h-12">
          <img src={options.img_src ? options.img_src : "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg?t=st=1722632150~exp=1722632750~hmac=43b3509a8e9562d1d0ce13c00bb88de971b017b512924102f64f2123a099aa31"} alt={options.img_alt} className="w-12 aspect-square bg-teal-800 rounded-full mr-2 object-cover" />
          <div className="flex flex-col justify-center items-center w-max">
            <p className="w-full text-sm ml-1 tracking-wide text-slate-600">
              <span className="font-semibold text-slate-900">{options.name}</span><span className="mx-2">|</span><span>{options.rol}</span>
            </p>
            <StarRating id={options.id} className="w-full" rate={options.rate} size={20} />
          </div>
        </div>
        <p className="text-sm leading-4 overflow-hidden custom-p-h my-3 mx-1 text-slate-600 tracking-wide">{options.com}</p>
      </article>
    </div>
  )
}

const ReviewSlide = ({ options, id }) => {
  return (
    <div className="w-full px-24 flex justify-evenly" id={id} >
      {options.revList.map(rev => {
        return (<Review options={rev} key={rev.id} />)
      })}
    </div>
  )
}

const OfertaEducativa = () => {
  return (
    <section id="offert" className="mx-8 lg:mx-16 mt-20 custom-offset custom-offset-mobile">
      <TitleWithBorder
        text={`Oferta Educativa`}
        className={`hidden lg:block mx-auto w-fit text-8xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleOfertaEducativa`}
        offSet={80}
        hasOffset={true}
      />
      <TitleWithBorder
        text={`Oferta`}
        className={`lg:hidden block mx-auto w-fit text-6xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleOferta`}
        offSet={80}
        mobile={true}
        hasOffset={true}
      />
      <TitleWithBorder
        text={`Educativa`}
        className={`lg:hidden block mx-auto w-fit text-6xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleEducativa`}
        offSet={80}
        mobile={true}
        hasOffset={true}
      />
      <article className="w-full h-fit lg:px-16 my-16 flex flex-col lg:flex-row lg:justify-evenly lg:h-80">
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Jardín de niños" rango={"3 años en adelante"} texto1={`Profesores especializados`} texto2={`Material Gratis`} texto3={`Monitoreo Continuo`}
        />
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Primaria" rango={"6 años en adelante"} texto1={`Actividades de Formación`} texto2={`Descuentos especiales`} texto3={`Monitoreo Continuo`}
        />
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Secundaria" rango={"12 años en adelante"} texto1={`Practica real`} texto2={`Apoyo en vocación`} texto3={`Monitoreo Continuo`}
        />
      </article>
      <article className="w-full aspect-square lg:aspect-video lg:h-60">
        <Slider className={`hidden lg:block w-full h-full`} arrayToMap={reviews} Element={ReviewSlide} sliderId="reviewContainer" dark={true} interval={8500} arrowTop="top-2-5" />
        <Slider className={`block lg:hidden`} arrayToMap={[...reviews.flatMap(item => item.revList)].map(otherItem => { return { ...otherItem, id: `mob${otherItem.id}` } })} Element={Review} sliderId="reviewMobileContainer" dark={true} center={true} arrowTop="top-9-10" interval={8500} />
      </article>
    </section>
  )
}

export default OfertaEducativa;