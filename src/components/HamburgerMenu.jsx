import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./Button.jsx";
import { useUserContext } from "../context/UserContext.jsx";

const NotUserLogin = ({ openLogin, toggleLogin, logins }) => {
  return (
    <>

      <li className="my-6">
        <Button className="font-bold text-2xl md:text-4xl" onClick={toggleLogin}>
          <span>LogIn</span>
          <ChevronDown className={`inline ml-1 mb-px ${openLogin ? "-rotate-90" : "rotate-0"} transition-all duration-300`} strokeWidth={2.5} size={20} />
        </Button>
      </li>

      <li className={`${openLogin ? "opacity-100 h-64" : "opacity-0 h-0"} transition-all duration-200`}>
        {logins.map(item => {
          return (
            <Link className={`${openLogin ? "block" : "hidden"} m-auto p-3 font-medium md:text-2xl`} key={item.id} to={item.path} onClick={() => { onClick() }}>{item.text}</Link>
          )
        })}
      </li>

    </>
  )
}

const HasUserOptions = ({ openLogin, toggleLogin, user }) => {
  return (
    <>

      <li className="my-6">
        <Button className="font-bold text-2xl md:text-4xl" onClick={toggleLogin}>
          <span>Perfil</span>
          <ChevronDown className={`inline ml-1 mb-px ${openLogin ? "-rotate-90" : "rotate-0"} transition-all duration-300`} strokeWidth={2.5} size={20} />
        </Button>
      </li>

      <li className={`${openLogin ? "opacity-100 h-64" : "opacity-0 h-0"} transition-all duration-200`}>

        <Link className={`${openLogin ? "block" : "hidden"} m-auto p-3 font-medium md:text-2xl`} to={`/usuario/${user?.tipo}`} onClick={() => { onClick() }}>Ir al Perfil</Link>
        <Link className={`${openLogin ? "block" : "hidden"} m-auto p-3 font-medium md:text-2xl`} to={`/usuario/${user?.tipo}`} onClick={() => { onClick() }}>Configuración</Link>
        <Link className={`${openLogin ? "block" : "hidden"} m-auto p-3 font-medium md:text-2xl`} to={`/login/${user?.tipo}`} onClick={() => { onClick() }}>Cerrar Sesión</Link>

      </li>

    </>
  )
}

const HamburgerMenu = ({ items, logins, onClick }) => {
  const [openNavigation, setOpenNavigation] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);

  const [user, setUser] = useUserContext();

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  }
  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  }

  return (
    <ul className="text-lg text-slate-900 h-screen px-6 md:px-12">
      <li>
        <Button className="font-bold text-2xl md:text-4xl" onClick={toggleNavigation}>
          <span>Navegación</span>
          <ChevronDown className={`inline ml-1 mb-px ${openNavigation ? "-rotate-90" : "rotate-0"} transition-all duration-300`} strokeWidth={2.5} size={20} />
        </Button>
      </li>
      <li className={`${openNavigation ? "opacity-100 h-64" : "opacity-0 h-0"} transition-all duration-200`}>
        {items.map(item => {
          return (
            <a className={`${openNavigation ? "block" : "hidden"} m-auto p-3 font-medium md:text-2xl`} key={item.id} href={item.url} onClick={() => { onClick() }}>{item.text}</a>
          )
        })}
      </li>

      {user ? <HasUserOptions openLogin={openLogin} toggleLogin={toggleLogin} user={user} /> : <NotUserLogin openLogin={openLogin} toggleLogin={toggleLogin} logins={logins} />}
    </ul>
  )
}

export default HamburgerMenu;