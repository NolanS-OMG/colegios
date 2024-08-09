import Button from "../Button";
import { MoveRight, X, Pencil, Settings } from "lucide-react";

const MaterialCard = ({ img_url, img_alt, type, title, buttonText, canDeleteEdit = false }) => {
  return (
    <article className="rounded-xl border border-gray-100 shadow relative">
      <Button className={`${canDeleteEdit ? "block" : "hidden"} p-0.5 bg-red-500 flex w-5 aspect-square absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2 hover:bg-red-400`}>
        <X className="m-auto" color="#f3f4f6" size={16} />
      </Button>

      <Button className={`${canDeleteEdit ? "block" : "hidden"} p-0.5 bg-amber-500 flex w-5 aspect-square absolute top-0 right-0 rounded-full -translate-x-2/3 -translate-y-1/2 hover:bg-amber-400`}>
        <Settings className="ml-px" color="#f3f4f6" size={16} />
      </Button>

      <img className="w-full h-3/4 object-cover rounded-t-xl" src={img_url} alt={img_alt} />
      <div className="w-full h-1/4 text-sm text-slate-900 px-2 flex flex-col">
        <p className="ubuntu whitespace-nowrap overflow-hidden text-ellipsis">{`${title} `}<span className="font-semibold">{`[${type}]`}</span></p>
        <Button className={`underline ml-auto mt-auto text-xs`}><span>{buttonText}</span><MoveRight className="inline ml-1" size={16} strokeWidth={1.5} color="#0f172a" /></Button>
      </div>
    </article>
  )
}

export default MaterialCard;