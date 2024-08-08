const Event = ({ numero, mes, titulo, hora, shortDesc, mb0 = false }) => {
  return (
    <article className={`h-14 mt-2 ${mb0 ? "mb-0" : "mb-6"} flex`}>
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

export default Event;