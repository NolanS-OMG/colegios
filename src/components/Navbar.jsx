import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Menu, X, MousePointer2, MousePointerClick, ChevronDown, MoveRight, CircleArrowRight } from "lucide-react";

import { navigation, accesosLogin } from "../constants";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import { useUserContext } from "../context/UserContext";

const AcceessLink = ({ className, text, to }) => {
  return (
    <Link className={`block py-2 my-1 hover:text-teal-800/60 ${className}`} to={to} >
      <span>{text}</span>
    </Link>
  )
}

const NotUserLogin = ({ openLogin, loginMenu, toggleLogin }) => {
  return (
    <div className={`inline relative`}>
      <Button className="text-slate-700 font-semibold relative hover:text-slate-900 custom-login-arrow" onClick={toggleLogin}>
        <span>Login</span>
        <ChevronDown className={`inline ml-1 mb-px ${openLogin ? "rotate-180" : "rotate-0"} transition-all duration-300`} strokeWidth={2} size={22} />
      </Button>
      <div className={`${openLogin ? "block" : "hidden"} ${loginMenu ? "opacity-100" : "opacity-0"} absolute top-full translate-y-1 right-0 w-48 py-2 px-3 my-2 text-xs bg-slate-100 shadow transition-all duration-200`}>
        {accesosLogin.map(item => {
          return <AcceessLink key={item.path} text={item.text} to={item.path} />
        })}
      </div>
    </div>
  )
}

const HasUserOptions = ({ user, openLogin, loginMenu, toggleLogin }) => {
  return (
    <div className={`inline relative`}>

      <Button className="text-slate-700 font-semibold relative hover:text-slate-900 custom-login-arrow flex items-center" onClick={toggleLogin}>
        <img
          src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg?t=st=1722632150~exp=1722632750~hmac=43b3509a8e9562d1d0ce13c00bb88de971b017b512924102f64f2123a099aa31"
          alt=""
          className="aspect-square w-8 rounded-full mr-2"
        />
        <span>{user?.nombre}</span>
        <ChevronDown className={`inline ml-1 mb-px ${openLogin ? "rotate-180" : "rotate-0"} transition-all duration-300`} strokeWidth={2} size={22} />
      </Button>

      <div className={`${openLogin ? "block" : "hidden"} ${loginMenu ? "opacity-100" : "opacity-0"} absolute top-full translate-y-1/4 right-0 translate-x-28 w-48 py-2 px-3 my-2 text-xs bg-slate-100 shadow transition-all duration-200`}>
        <AcceessLink text="Perfil" to={`/usuario/${user?.tipo}`} />
        <AcceessLink text="Configuración" to={`/usuario/${user?.tipo}`} />
        <AcceessLink text="Cerrar Sesión" to={`/login/${user?.tipo}`} />
      </div>

    </div>
  )
}

const Navbar = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const [user, setUser] = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoginMenu(openLogin);
    }, 1);
  }, [openLogin])

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  }

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
  }

  const handleClick = () => {
    setOpenNavigation(false);
  }

  const blurAmount = Math.min(scrollY / 50, 6);
  const opacityAmount = Math.min(scrollY / 150, 0.25);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen lg:w-full z-50 ${openNavigation ? "backdrop-blur bg-slate-50/25" : "backdrop-blur-0 bg-slate-50/5"}`}
      style={openNavigation ? {} : {
        backdropFilter: `blur(${blurAmount}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacityAmount})`
      }}
    >
      <div className="container mx-auto flex justify-between items-center p-6 lg:p-4">
        <div className="text-slate-900 text-2xl lg:text-3xl font-bold">LOGOTIPO</div>
        <ul className="hidden lg:flex text-base space-x-10">
          {navigation.map((item) => {
            return (
              <li key={item.id} className="flex">
                <Button href={item.url} onClick={handleClick} className={`hover:text-slate-400 text-slate-900 ${item.url === pathName.hash ? 'font-semibold' : ''} m-auto`} >
                  <span>{item.text}</span>
                </Button>
              </li>
            )
          })}
          <li>

            {user ? <HasUserOptions user={user} openLogin={openLogin} loginMenu={loginMenu} toggleLogin={toggleLogin} /> : <NotUserLogin openLogin={openLogin} loginMenu={loginMenu} toggleLogin={toggleLogin} />}

          </li>
        </ul>

        <Button className={`lg:hidden p-2 border border-slate-900 rounded-md ${openNavigation ? "bg-slate-900" : "custom-btn-shadow-reverse"}`} onClick={toggleNavigation}>
          {openNavigation ? <X color="#f1f5f9" /> : <Menu color="#0f172a" />}
        </Button>

      </div>
      {openNavigation && <HamburgerMenu items={navigation} logins={accesosLogin} onClick={handleClick} />}
    </nav >
  )
}

export default Navbar;