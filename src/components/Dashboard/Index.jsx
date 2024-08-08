import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import Button from "../Button";

import { MoveRight } from "lucide-react";

const ChatCard = ({ img_url, img_alt, title, type }) => {
  return (
    <div className="p-2 rounded-lg flex items-center cursor-pointer hover:bg-slate-900/10">
      <div className="w-8 aspect-square rounded-full relative">
        <div className="absolute bottom-0 right-0 w-2 aspect-square rounded-full bg-green-500"></div>
        <img src={img_url} alt={img_alt} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="text-xs ml-2 text-slate-900">
        <p className="font-semibold">{title}</p>
        <p className="ubuntu text-slate-400">{type}</p>
      </div>
    </div>
  )
}

const MaterialCard = ({ img_url, img_alt, type, title, buttonText }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-100 shadow">
      <img className="w-full h-3/4 object-cover" src={img_url} alt={img_alt} />
      <div className="w-full h-1/4 text-sm text-slate-900 px-2 flex flex-col">
        <p className="ubuntu whitespace-nowrap overflow-hidden text-ellipsis">{`${title} `}<span className="font-semibold">{`[${type}]`}</span></p>
        <Button className={`underline ml-auto mt-auto text-xs`}><span>{buttonText}</span><MoveRight className="inline ml-1" size={16} strokeWidth={1.5} color="#0f172a" /></Button>
      </div>
    </article>
  )
}

const Event = ({ numero, mes, titulo, hora, shortDesc }) => {
  return (
    <article className="h-14 mt-2 mb-6 flex">
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
    <div className="w-full h-full flex">

      <div className="w-2/3 mr-6">

        <article className="w-full h-48 mr-6 bg-teal-600/70 shadow rounded-3xl relative overflow-hidden flex justify-evenly">

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

        <div className="w-full mt-4 p-4 custom-h-index-content shadow rounded-3xl bg-slate-50">

          <div className="col-start-1 col-end-4 flex justify-between items-center mb-2">
            <span className="px-2 text-lg font-semibold">Material Reciente</span>
            <label className="text-sm">
              <span className="mr-2">Materia: </span>
              <select name="" id="" className="py-1 px-2">
                <option value="all">Todas</option>
                <option value="es">Español</option>
                <option value="mat">Matemáticas</option>
                <option value="bio">Biología</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2 grid-flow-row [grid-auto-rows:48%] overflow-auto custom-h-index-material-grid custom-scroll px-1">

            <MaterialCard
              img_url="https://img.freepik.com/premium-photo/3d-rendering-open-book-yellow-background_968898-438.jpg?w=740"
              img_alt="Libros en 3D" title="Libro de Español 2" type="PDF" buttonText="Ir al PDF"
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-photo/clipboard-with-checklist-paper-note-icon-symbol-purple-background-3d-rendering_56104-1491.jpg?t=st=1723072666~exp=1723076266~hmac=2baef0f27d999610781fb81c7e69e42a3fac47c7f9db747c92a3ecc730afbec5&w=740"
              img_alt="Artículo 3D" title="Artículo Medicina" type="PDF" buttonText="Ir al PDF"
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-photo/checklist-clipboard-pencil-icon-sign-symbol-reminder-checkbox-document-report-concept-pink-background-3d-rendering_56104-1434.jpg?t=st=1723071492~exp=1723075092~hmac=47f12821a7bb9fde42a4ecec8bf5d1d8ae30e30ca97890a76a3390fbe865127c&w=740"
              img_alt="Lista en 3D" title="Artículo Electrodinámica" type="PDF" buttonText="Ir al Artículo"
            />

            <MaterialCard
              img_url="https://img.freepik.com/premium-photo/video-player-icon-social-media-live-stream-browser-live-digital-stream-multimedia-player-online-video-sites-video-service-video-media-concept-3d-render-illustration-cartoon-minimal_473922-1293.jpg?w=826"
              img_alt="3D Video Button" title="Tutorial integrales" type="Video" buttonText="Ir al Video"
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-psd/pile-books-3d-render-isolated_47987-15465.jpg?t=st=1723071071~exp=1723074671~hmac=4c875f1f2ca406837c94997c7c525296d3ba650aaa8947813855cad15617eaee&w=740"
              img_alt="Libros en 3D" title="Libro de Biología" type="PDF" buttonText="Ver el libro"
            />

            <MaterialCard
              img_url="https://img.freepik.com/premium-vector/3d-white-clipboard-task-management-todo-check-list-purple-background-efficient-work-project-plan-concept-assignment-exam-productivity-solution-icon-3d-icon-vector-render-illustration_412828-1290.jpg?w=740"
              img_alt="Artículo 3D" title="Estudio nivel económico" type="PDF" buttonText="Ir al PDF"
            />

          </div>

        </div>

      </div>

      <div className="w-1/3 mt-10 custom-h-index-side">

        <div className="w-full bg-slate-50 shadow rounded-3xl mb-4 custom-h-inner-side">
          <ul className="border-b border-slate-300 flex mx-4 pt-2 justify-evenly text-slate-700">
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

        <div className="w-full bg-slate-50 shadow rounded-3xl mb-4 custom-h-inner-side">
          <h4 className="px-8 pt-4 font-semibold text-slate-400 text-xl">Chats</h4>
          <article className="mx-4 flex flex-col gap-1 custom-h-index-chat overflow-auto custom-scroll">
            <ChatCard title="Alex Sánchez" type="Amigo" img_alt="Imagen de perfil 3d genérica"
              img_url="https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611750.jpg?w=740&t=st=1722632367~exp=1722632967~hmac=348a4608bf0005c9ceecb59a81d0650d56221a63969a642143ad88b4da24c58f"
            />
            <ChatCard title="Mariel Salazar" type="Amigo" img_alt="Imagen de perfil 3d genérica"
              img_url="https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611725.jpg?w=740&t=st=1722632418~exp=1722633018~hmac=6a568d4a53fd872534f9c2c0bdb6593f059c9fd96965a287b5e012f4491b0c05"
            />
            <ChatCard title="Monserat Rodríguez" type="Profesor" img_alt="Imagen de perfil 3d genérica"
              img_url="https://img.freepik.com/psd-gratis/representacion-3d-avatar_23-2150833538.jpg?w=740&t=st=1722632467~exp=1722633067~hmac=cab5f86b7394be91a7127289e0bf00a2af2de744b5101856391381b66f7be069"
            />
            <ChatCard title="Español Equipo 03" type="Grupo" img_alt="Imagen de perfil 3d genérica"
              img_url="https://netrinoimages.s3.eu-west-2.amazonaws.com/2011/07/29/80422/37456/open_book_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_241913.jpg"
            />
          </article>
        </div>

      </div>



    </div>
  )
}

export default Index;