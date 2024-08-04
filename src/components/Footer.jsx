import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-900 bg-slate-800 w-full text-slate-200 px-12 pt-8 pb-4 text-sm relative z-0 font-light flex justify-between items-end">
      <div className="custom-footer-inner-shadow">
      </div>
      <div className="z-10 relative w-fit">
        <span className="text-xl">Datos de contacto</span> <br /> <br />
        <strong className="text-slate-100 font-medium">Correo Electrónico</strong>: correo@email.com <br />
        <strong className="text-slate-100 font-medium">Número de teléfono</strong>: +52 8115835723 <br className="hidden lg:inline" /> <br className="hidden lg:inline" /> <br className="hidden lg:inline" />
        <div className="z-10 w-fit flex lg:hidden justify-evenly my-6 lg:mt-2 lg:px-4">
          <Linkedin color="#e2e8f0" strokeWidth={1} className="mx-2" />
          <Facebook color="#e2e8f0" strokeWidth={1} className="mx-2" />
          <Instagram color="#e2e8f0" strokeWidth={1} className="ml-2" />
        </div>
        Página creada por <strong className="text-slate-100 font-medium">ISOLU</strong>
      </div>
      <div className="z-10 w-fit hidden lg:flex justify-evenly mt-2 px-4">
        <Linkedin color="#e2e8f0" strokeWidth={1} className="mx-2" />
        <Facebook color="#e2e8f0" strokeWidth={1} className="mx-2" />
        <Instagram color="#e2e8f0" strokeWidth={1} className="ml-2" />
      </div>
    </footer>
  )
}

export default Footer;