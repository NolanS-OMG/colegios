import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import Button from "../Button";

const Event = ({ numero, mes, titulo, hora, shortDesc }) => {
  return (
    <article className="h-14 mt-2 mb-8 flex">
      <div className="aspect-square h-full rounded-xl bg-teal-600/70 flex flex-col justify-center items-center">
        <span className="text-2xl font-semibold text-slate-50 w-fit mx-auto">
          {numero}
        </span>
        <span className="text-xs text-slate-50 w-fit mx-auto -mt-2">{mes}</span>
      </div>
      <div className="flex flex-col w-full px-2 text-slate-700">
        <div className="flex justify-between items-center"><h4 className="font-bold text-slate-900">{titulo}</h4><span className="text-sm font-semibold text-slate-500">{hora}</span></div>
        <p className="font-light text-xs">{shortDesc}</p>
      </div>
    </article>
  )
}

const Index = () => {
  const [user, setUser] = useUserContext();
  const [side, setSide] = useState(0);

  const setSideOne = () => {
    setSide(0);
  }
  const setSideTwo = () => {
    setSide(1);
  }
  const setSideThree = () => {
    setSide(2);
  }

  return (
    <div className="w-full h-full grid grid-cols-12 gap-4 mt-4 [grid-auto-rows:1rem]">

      <article className="col-start-1 col-end-9 row-start-1 row-end-8 bg-teal-600/70 shadow rounded-3xl relative overflow-hidden flex justify-evenly">

        <div className="aspect-square h-full p-4">
          <article className="w-full h-full rounded-full border-8 border-white flex">
            <div className="m-auto relative">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4 text-xs text-slate-100">Promedio:</span>
              <span className="text-7xl font-semibold text-slate-50">96</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 text-xs text-slate-100">96/100</span>
            </div>
          </article>
        </div>

        <div className="h-full p-6">
          <article className="bg-slate-50 w-full h-full rounded-xl shadow-lg text-slate-900 flex flex-col items-center justify-evenly">
            <div className="px-4 w-full">
              <h4 className="text-lg font-semibold">Tareas</h4>
              <p className="py-1 px-3 rounded-full bg-slate-300/50 font-semibold text-slate-600 w-fit text-sm">
                Completadas: <strong className="text-teal-600/80">15</strong>/20
              </p>
            </div>
            <div className="px-4 w-full">
              <h4 className="text-lg font-semibold">Examenes</h4>
              <p className="py-1 px-3 rounded-full bg-slate-300/50 font-semibold text-slate-600 w-fit text-sm">
                Completados: <strong className="text-teal-600/80">3</strong>/5
              </p>
            </div>
          </article>
        </div>

      </article>

      <div className="col-start-9 col-end-13 row-start-1 row-end-17 bg-slate-50 shadow rounded-3xl">
        <ul className="border-b border-slate-300 flex mx-4 mt-2 justify-evenly text-slate-700">
          <li className="relative">
            <Button className={`px-2 py-1 ${side === 0 ? "text-slate-900 font-semibold" : ""} transition-all duration-100`} onClick={setSideOne}>Tareas</Button>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${side === 0 ? "bg-slate-900" : "bg-transparent"} transition-all duration-100`}></span>
          </li>
          <li className="relative">
            <Button className={`px-2 py-1 ${side === 1 ? "text-slate-900 font-semibold" : ""} transition-all duration-100`} onClick={setSideTwo}>Exámenes</Button>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${side === 1 ? "bg-slate-900" : "bg-transparent"} transition-all duration-100`}></span>
          </li>
          <li className="relative">
            <Button className={`px-2 py-1 ${side === 2 ? "text-slate-900 font-semibold" : ""} transition-all duration-100`} onClick={setSideThree}>Eventos</Button>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${side === 2 ? "bg-slate-900" : "bg-transparent"} transition-all duration-100`}></span>
          </li>
        </ul>

        <div className={`px-4 ${side === 0 ? "block" : "hidden"} overflow-auto custom-h-events`}>
          <Event numero={28} mes={`Sep`} titulo={"Español"} hora={"11:59pm"} shortDesc={"Reseña del libro cuento leído en clase"} />
          <Event numero={3} mes={`Oct`} titulo={"Biología"} hora={"11:59am"} shortDesc={"Responder cuestionario de la etapa 3"} />
          <Event numero={7} mes={`Oct`} titulo={"Matemáticas"} hora={"11:59am"} shortDesc={"Responder el laboratorio de problemas de la etapa 2"} />
          <Event numero={16} mes={`Oct`} titulo={"Matemáticas"} hora={"11:59am"} shortDesc={"Responder el laboratorio de problemas de la etapa 3"} />
          <Event numero={4} mes={`Nov`} titulo={"Historia"} hora={"11:59am"} shortDesc={"Línea del tiempo de los presidentes del País"} />
        </div>

        <div className={`px-4 ${side === 1 ? "block" : "hidden"} overflow-auto custom-h-events`}>
          <Event numero={10} mes={`Nov`} titulo={"Física"} hora={"1:00pm"} shortDesc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
          <Event numero={22} mes={`Nov`} titulo={"Matemáticas"} hora={"10:00am"} shortDesc={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
        </div>

        <div className={`px-4 ${side === 2 ? "block" : "hidden"} overflow-auto custom-h-events`}>
          <Event numero={27} mes={`Sep`} titulo={"Español"} hora={"11:59pm"} shortDesc={"Reseña del libro cuento leído en clase"} />
          <Event numero={3} mes={`Oct`} titulo={"Biología"} hora={"11:59am"} shortDesc={"Responder cuestionario de la etapa 3"} />
          <Event numero={7} mes={`Oct`} titulo={"Matemáticas"} hora={"11:59am"} shortDesc={"Responder el laboratorio de problemas de la etapa 2"} />
          <Event numero={16} mes={`Oct`} titulo={"Matemáticas"} hora={"11:59am"} shortDesc={"Responder el laboratorio de problemas de la etapa 3"} />
          <Event numero={4} mes={`Nov`} titulo={"Historia"} hora={"11:59am"} shortDesc={"Línea del tiempo de los presidentes del País"} />
          <Event numero={6} mes={`Nov`} titulo={"Español"} hora={"11:59am"} shortDesc={"Proyecto Final: Ensayo de tema a elegir"} />
          <Event numero={25} mes={`Nov`} titulo={"Historia"} hora={"11:59am"} shortDesc={"Línea del tiempo de los presidentes del País"} />
          <Event numero={26} mes={`Nov`} titulo={"Español"} hora={"11:59am"} shortDesc={"Proyecto Final: Ensayo de tema a elegir"} />
        </div>

      </div>

    </div>
  )
}

export default Index;