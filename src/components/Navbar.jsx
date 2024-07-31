import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Menu, X, MousePointer2 } from "lucide-react";

import { navigation } from "../constants";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  }

  const handleClick = () => {
    setOpenNavigation(false);
  }

  const blurAmount = Math.min(scrollY / 50, 6);
  const opacityAmount = Math.min(scrollY / 150, 0.15);

  return (
    <nav
      className="fixed top-0 left-0 w-screen lg:w-full bg-transparent p-6 lg:p-4 z-50"
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacityAmount})`
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
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
            {/* <Button className="mr-4 custom-btn-shadow-t px-3 py-1 text-teal-800 text-sm font-semibold border-2 border-teal-800 rounded-lg hover:translate-x-[-2px] hover:translate-y-[2px]">Iniciar Sesión</Button>
            <Button className="custom-btn-shadow px-3 py-1 text-slate-900 text-sm font-semibold border-2 border-slate-900 rounded-lg hover:translate-x-[-2px] hover:translate-y-[2px]">Registrarse</Button> */}
            <Button className="custom-btn-shadow px-3 py-1 text-slate-900 text-sm font-semibold border-2 border-slate-900 rounded-lg hover:translate-x-[-2px] hover:translate-y-[2px]">
              <MousePointer2 className="mr-2 inline" color="#0f172a" size={16} />
              <span className="inline">Contáctenos</span>
            </Button>
          </li>
        </ul>

        <Button className={`lg:hidden p-2 border border-slate-900 rounded-md ${openNavigation ? "bg-slate-900" : "custom-btn-shadow-reverse"}`} onClick={toggleNavigation}>
          {openNavigation ? <X color="#f1f5f9" /> : <Menu color="#0f172a" />}
        </Button>

      </div>
      {openNavigation && <HamburgerMenu items={navigation} />}
    </nav >
  )
}

export default Navbar;