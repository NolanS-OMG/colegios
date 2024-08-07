import { Link, useLocation } from "react-router-dom";
import { MoveLeft, MoveRight } from "lucide-react"

import LabelInput from "./LabelInput";
import Button from "./Button.jsx";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext.jsx";

const getTitle = (path) => {
  if (path === "alumno") {
    return "Acceso de Alumnos";
  }
  if (path === "padre") {
    return "Acceso de Padres";
  }
  if (path === "profesor") {
    return "Acceso de Profesores";
  }
  if (path === "admin") {
    return "Acceso de Administradores";
  }
  return "";
}

const AccessPage = () => {
  const location = useLocation();
  const [title, setTitle] = useState(getTitle(location.pathname.split("/")[2]));

  const [user, setUser] = useUserContext();

  useEffect(() => {
    setTitle(getTitle(location.pathname.split("/")[2]));
  }, [location]);

  return (
    <div className="relative flex w-full h-cusotm-full">

      <Link className="absolute top-6 left-3 p-2 flex font-semibold items-center custom-return-arrow" to="../../">
        <MoveLeft strokeWidth={1.75} /> <span className="ml-2 text-xl">Volver al Inicio</span>
      </Link>

      <form action="" className={`m-auto bg-slate-500/30 shadow rounded-lg py-4 px-8 ${title ? "block" : "hidden"}`}>
        <h4 className="w-full text-center text-xl md:text-4xl lg:text-xl p-4 md:mb-4 lg:mb-0">{title}</h4>
        <LabelInput label="Id" placeholder="Ingrese el Id..." className="my-2 px-1 text-base md:text-xl lg:text-base" />
        <LabelInput label="Contraseña" placeholder="Ingrese el Id..." type="password" className="px-1 md:text-xl lg:text-base" />
        <Link to="../recuperar-contraseña" className="block text-xs md:text-base lg:text-xs text-slate-900 hover:text-teal-700/70">¿Olvidaste tu contraseña?</Link>

        <div className="flex mt-4">
          {/* <Button className="mx-auto rounded-lg bg-slate-700 text-slate-200 font-semibold text-base md:text-xl lg:text-base py-2 px-4 hover:bg-slate-700/90 hover:text-slate-100 transition-all duration-200">Ingresar</Button> */}
          <Link to={`/usuario/${location.pathname.split("/")[2]}/${user?.id}`} className="mx-auto rounded-lg bg-slate-700 text-slate-200 font-semibold text-base md:text-xl lg:text-base py-2 px-4 hover:bg-slate-700/90 hover:text-slate-100 transition-all duration-200">Ingresar</Link>
        </div>

        <Link to="../recuperar-id" className="block text-xs md:text-base lg:text-xs mt-4 text-slate-900 hover:text-teal-700/70">¿Olvidaste tu ID?</Link>
        <Link to="../../faq" className="block text-xs md:text-base lg:text-xs text-slate-900 hover:text-teal-700/70">Preguntas Frecuentes</Link>
        <Link to="../" className="block text-xs md:text-base lg:text-xs text-slate-900 hover:text-teal-700/70">Otros accesos</Link>
      </form>

      <div className={`${title ? "hidden" : "block"} m-auto bg-slate-500/30 shadow rounded-lg py-4 px-8 text-lg`}>
        <h4 className="text-xl mb-3">Elija el LogIn que desea</h4>
        <Link to="/login/alumno" className="block my-1 custom-return-arrow"><MoveRight strokeWidth={1.75} className="inline mr-2" />Acceso a Alumnos</Link>
        <Link to="/login/padre" className="block my-1 custom-return-arrow"><MoveRight strokeWidth={1.75} className="inline mr-2" />Acceso a Padres</Link>
        <Link to="/login/profesor" className="block my-1 custom-return-arrow"><MoveRight strokeWidth={1.75} className="inline mr-2" />Acceso a Profesores</Link>
        <Link to="/login/admin" className="block my-1 custom-return-arrow"><MoveRight strokeWidth={1.75} className="inline mr-2" />Acceso a Administradores</Link>
      </div>
    </div>
  )
}

export default AccessPage;