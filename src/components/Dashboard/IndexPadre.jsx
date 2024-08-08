import { CircleAlert, Check } from "lucide-react";

import { users } from "../../constants";
import Event from "./Event";

const IndexPadre = () => {
  return (
    <div className="w-full h-full relative flex">

      <div className="w-2/3">
        <div className="pr-4 mb-2 w-full">
          <input placeholder="Buscar..." type="text" className="w-full px-4 py-2 bg-slate-200 border border-slate-300 rounded-full shadow-sm" />
        </div>
        <div className="w-full flex">
          <div className="w-2/5 custom-h-padre-front p-4 pl-0">
            <div className="w-full h-full bg-teal-600/70 shadow rounded-3xl text-slate-50">

              <div className="w-full aspect-square px-8 py-6 relative">
                <div className="absolute bottom-0 left-0 w-full text-center font-semibold text-xl">{`${users[0].nombre} ${users[0].apellido}`}</div>
                <img src={users[0].img_src} alt={users[0].img_alt} className="rounded-full shadow" />
              </div>

              <div className="w-full flex flex-col px-4 mt-4">
                <div className="p-2 bg-slate-50/20 rounded-lg">
                  <p><strong>ID</strong>: 129432</p>
                  <p><strong>Grado</strong>: 2°</p>
                  <p><strong>Aula</strong>: 205</p>
                  <p><strong>Profesor</strong>: {`${users[2].nombre} ${users[2].apellido}`}</p>
                </div>
              </div>

            </div>
          </div>
          <div className="w-3/5 custom-h-padre-front p-4 pl-0">
            <div className="w-full h-full bg-slate-50 shadow rounded-3xl text-slate-900">

              <div className="flex">
                <div className="px-4 mt-2 w-full">

                  <h4 className="w-full text-lg text-slate-400/80 font-semibold p-4 pb-0">Resumen académico</h4>

                  <div className="w-full h-16 flex items-center justify-evenly -mt-1">

                    <div className="h-full aspect-square rounded-full flex pt-2">
                      <p className="m-auto relative">
                        <span className="text-4xl font-semibold">96</span>
                        <div className="absolute bottom-0 right-0 translate-x-full">/100</div>
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pb-1 text-xs">Promedio:</div>
                      </p>
                    </div>

                    <div className="">

                      <div className="h-fit flex items-center mb-2">
                        <h4 className="text-base font-semibold">Tareas</h4>
                        <p className="ml-1 py-1 px-3 rounded-full bg-slate-300/50 font-semibold text-slate-600 w-fit text-xs">
                          <strong className="text-teal-600/80">15</strong>/20
                        </p>
                      </div>

                      <div className="h-fit flex items-center">
                        <h4 className="text-base font-semibold">Exámenes</h4>
                        <p className="ml-1 py-1 px-3 rounded-full bg-slate-300/50 font-semibold text-slate-600 w-fit text-xs">
                          <strong className="text-teal-600/80">3</strong>/5
                        </p>
                      </div>

                    </div>

                  </div>

                  <h4 className="w-full text-lg text-slate-400/80 font-semibold p-4 pb-0">Alertas</h4>

                  <div className="mx-6 my-1 flex text-sm items-center">
                    <CircleAlert strokeWidth={2} color="#dc2626" className="mr-2" />
                    <p className="bg-slate-300/40 py-2 px-3 rounded-lg">Lleva <strong>2 Faltas</strong> esta semana</p>
                  </div>

                  <div className="mx-6 my-1 flex text-sm items-center">
                    <Check strokeWidth={2} color="rgb(13 148 136 / 0.8)" className="mr-2" />
                    <p className="bg-slate-300/40 py-2 px-3 rounded-lg">Ha completado todas sus tareas</p>
                  </div>

                  <div className="mx-6 my-1 flex text-sm items-center">
                    <Check strokeWidth={2} color="rgb(13 148 136 / 0.8)" className="mr-2" />
                    <p className="bg-slate-300/40 py-2 px-3 rounded-lg">Ha asistido a todos los exámenes</p>
                  </div>

                  <h4 className="w-full text-lg text-slate-400/80 font-semibold p-4 pb-1">Avisos</h4>

                  <div className="px-3 py-2 mx-2 bg-slate-300/40 rounded-t-xl">
                    <p className="text-sm font-semibold -mb-2">Próxima Tarea:</p>
                    <Event numero={28} mes="Sep" titulo="Español" hora="11:59pm" shortDesc="Reseña del cuento leído en clase" mb0={true} />
                  </div>

                  <div className="px-3 py-2 mx-2 bg-slate-300/40 rounded-b-xl">
                    <p className="text-sm font-semibold -mb-2">Próximo Examen:</p>
                    <Event numero={10} mes={`Nov`} titulo={"Física"} hora={"1:00pm"} shortDesc={"Todos los temas vistos después del 10 de Octubre"} mb0={true} />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 custom-h-index-side mt-10 text-slate-900">

        <div className="w-full custom-h-inner-side bg-slate-50 shadow rounded-3xl mb-4 flex flex-col">
          <h4 className="w-full text-lg text-slate-400/80 font-semibold p-4 pb-0">Comunicados recientes</h4>
          <article className="mx-4 mb-auto mt-4">
            <div className="h-12 flex items-center w-full">
              <div className="h-full aspect-square">
                <img src={users[2].img_src} alt={users[2].img_alt} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="ml-2 pb-2 h-fit w-full">
                <h4 className="font-semibold flex justify-between w-full items-center"><span>{`${users[2].nombre} ${users[2].apellido}`}</span><span className="text-slate-600/50 text-sm">2:32pm</span></h4>
                <h6 className="text-xs text-slate-600/70 -mt-1">{`${users[2].tipo.slice(0, 1).toUpperCase() + users[2].tipo.slice(1).toLowerCase()}`}</h6>
              </div>
            </div>
            <p className="text-sm text-slate-700 px-1 pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae fuga rem alias esse ducimus et neque. Doloremque laborum fugit quis aliquid incidunt repellendus suscipit dolore consectetur.</p>
          </article>
        </div>

        <div className="w-full custom-h-inner-side bg-slate-50 shadow rounded-3xl">
          <h4 className="w-full text-lg text-slate-400/80 font-semibold p-4 pb-0">Eventos</h4>
          <div className="px-4">
            <Event numero={5} mes={`Oct`} titulo={"Reuníon de padres"} hora={"10:00am"} shortDesc={"Para organizar un convivio entre los alumnos."} />
            <Event numero={19} mes={`Oct`} titulo={"Kermés"} hora={"11:00am"} shortDesc={"Evento de ocio donde pueden asistir tanto padres como alumnos."} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default IndexPadre;