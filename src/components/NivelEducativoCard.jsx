import { Check, Plus, BookOpenCheck } from "lucide-react";

import Button from "./Button";

const NivelEducativoCard = ({ className, title, rango, texto1, texto2, texto3 }) => {
  return (
    <article className={`aspect-square custom-card-shadow border-2 border-slate-900 text-slate-600 
    rounded-3xl flex flex-wrap ${className}`}>
      <h4 className="w-full text-3xl mt-2 p-2 text-center font-bold text-slate-900">{title}</h4>
      <div className="px-6 text-lg">
        <p className="my-2 flex items-center"><Plus className="mr-1" size={20} color="rgb(15 118 110 / 0.5)" strokeWidth={2.75} /><span>{rango}</span></p>
        <p className="my-2 flex items-center"><Check className="mr-1" size={20} color="rgb(15 118 110 / 0.5)" strokeWidth={2.75} /><span>{texto1}</span></p>
        <p className="my-2 flex items-center"><Check className="mr-1" size={20} color="rgb(15 118 110 / 0.5)" strokeWidth={2.75} /><span>{texto2}</span></p>
        <p className="my-2 flex items-center"><Check className="mr-1" size={20} color="rgb(15 118 110 / 0.5)" strokeWidth={2.75} /><span>{texto3}</span></p>
      </div>
      <Button className="ml-auto mr-4 mt-auto mb-4 bg-teal-700/90 rounded-md text-xl text-slate-100 py-2 px-4 font-semibold custom-btn-shadow-reverse border-2 border-slate-900 flex items-center hover:translate-x-2px hover:translate-y-2px">
        <BookOpenCheck className="mr-2" size={24} color="#f1f5f9" strokeWidth={2.75} /> <span>Plan de Estudios</span>
      </Button>
    </article>
  )
}

export default NivelEducativoCard;