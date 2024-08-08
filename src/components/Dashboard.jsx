import { useUserContext } from "../context/UserContext";

import {
  House, CalendarDays, BookOpenCheck, PencilLine, NotepadText, Headset, MoveLeft, LogOut, UserRoundCheck,
  ChevronDown, Bell, MessageSquareText
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

import Button from "./Button.jsx";

const DashboardLink = ({ path, text, icon }) => {
  const location = useLocation();

  console.log(location.pathname, path);

  const renderLink = () => (
    <Link to={path} className={`custom-dashboard-link-hover px-2 py-1 flex items-center gap-3 font-semibold text-lg`}>
      {icon}{text}
    </Link>
  )
  const renderSelected = () => (
    <span className={`custom-dashboard-selected px-2 py-1 flex items-center gap-3 font-semibold text-lg`}>
      {icon}{text}
    </span>
  )
  return (path === location.pathname) ? renderSelected() : renderLink();
}

const Dashboard = () => {
  const [user, setUser] = useUserContext();
  const [openProfile, setOpenProfile] = useState(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  }

  return (
    <div className="flex relative">

      <div className="custom-h-dashboard p-4 w-80 fixed left-0">
        <nav className="bg-slate-50 rounded-3xl shadow-md h-full">
          <ul className="flex flex-col h-full pb-4">
            <li className="text-slate-900 text-2xl lg:text-3xl font-bold text-center px-4 py-6">LOGOTIPO</li>
            <li className="px-6 my-2"><DashboardLink icon={<House strokeWidth={2} />} text="Home" path={`/usuario/${user.tipo}/${user.id}`} /></li>
            <li className="px-6 my-2"><DashboardLink icon={<CalendarDays strokeWidth={2} />} text="Calendario" path={`/usuario/${user.tipo}/${user.id}/calendario`} /></li>
            <li className="px-6 my-2"><DashboardLink icon={<BookOpenCheck strokeWidth={2} />} text="Calificaciones" path={`/usuario/${user.tipo}/${user.id}/calificaciones`} /></li>
            <li className="px-6 my-2"><DashboardLink icon={<PencilLine strokeWidth={2} />} text="Tareas" path={`/usuario/${user.tipo}/${user.id}/tareas`} /></li>
            <li className={`px-6 my-2 ${user.tipo === "alumno" ? "block" : (user.tipo === "docente" ? "block" : "hidden")}`}><DashboardLink icon={<NotepadText strokeWidth={2} />} text="Material Didáctico" path={`/usuario/${user.tipo}/${user.id}/material`} /></li>
            <li className="px-6 my-2"><DashboardLink icon={<UserRoundCheck strokeWidth={2} />} text="Asistencia" path={`/usuario/${user.tipo}/${user.id}/asistencia`} /></li>

            <li className="px-6 mt-auto mb-2"><Link to="/"><Headset strokeWidth={1.5} size={20} className="inline" /><span className="text-sm inline ml-2">Soporte</span></Link></li>
            <li className="px-6 mb-2"><Link to="/"><MoveLeft strokeWidth={1.5} size={20} className="inline" /><span className="text-sm inline ml-2">Volver al Inicio</span></Link></li>
            <li className="px-6 my-2"><Link to="/"><LogOut strokeWidth={2} size={20} className="inline" color="#dc2626" /><span className="text-sm inline ml-2 text-red-600 font-semibold">Cerrar Sesión</span></Link></li>
          </ul>
        </nav>
      </div>

      <div className="custom-h-dashboard w-full p-4 ml-80 relative">

        <div className="fixed left-0 top-0 w-full flex justify-end gap-2 py-2 px-4">

          <div className="p-1 bg-slate-50 shadow-sm rounded-full w-10 aspect-square flex relative">
            <div className="bg-red-600 aspect-square w-2 rounded-full absolute top-0 right-0"></div>
            <Bell strokeWidth={2} color="#0f172a" className="m-auto" size={22} />
          </div>

          <Button className="text-slate-700 bg-slate-50 shadow-sm py-1 px-2 rounded-full
           font-semibold relative hover:text-slate-900 custom-login-arrow flex items-center" onClick={toggleProfile}>
            <img
              src={user?.img_src}
              alt={user?.img_alt}
              className="aspect-square w-8 rounded-full mr-2 object-cover"
            />
            <span>{user?.nombre}</span>
            <ChevronDown className={`inline ml-1 mb-px ${openProfile ? "-rotate-180" : "rotate-0"} transition-all duration-300`} strokeWidth={2} size={20} color="#0f172a" />
          </Button>

        </div>

        <Outlet />

      </div>
    </div>
  )
}

export default Dashboard;