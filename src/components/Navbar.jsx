import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import { navigation } from "../constants";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

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

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-slate-900 text-xl lg:text-3xl font-bold">LOGOTIPO</div>
        <ul className="hidden lg:flex text-base space-x-10">
          {navigation.map((item) => {
            return (
              <li className="flex">
                <a key={item.id} href={item.url} className={`hover:text-slate-400 text-slate-900 ${item.url === pathName.hash ? 'font-semibold' : ''} m-auto`} >
                  <span>{item.text}</span>
                </a>
              </li>
            )
          })}
          <li>
            <Button className="mr-4 custom-btn-shadow-t px-3 py-1 text-teal-800 text-sm font-semibold border-2 border-teal-800 rounded-lg hover:translate-x-[-2px] hover:translate-y-[2px]">Iniciar Sesión</Button>
            <Button className="custom-btn-shadow px-3 py-1 text-slate-900 text-sm font-semibold border-2 border-slate-900 rounded-lg hover:translate-x-[-2px] hover:translate-y-[2px]">Registrarse</Button>
          </li>
        </ul>

        <Button className="lg:hidden" onClick={toggleNavigation}>
          {openNavigation ? <X color="white" /> : <Menu color="white" />}
        </Button>

      </div>
      {openNavigation && <HamburgerMenu items={navigation} />}
    </nav >
  )
}

export default Navbar;