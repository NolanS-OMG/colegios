const SectionTitle = ({ title, className = "", mobile = false }) => {
  return (
    <div className={`flex w-full h-fit bg-transparent ${mobile ? "" : "md:bg-slate-900 lg:block"} relative ${className}`}>
      <h4
        className={`z-10 w-fit m-auto px-2 text-slate-900 bg-slate-100 
        text-2xl roboto-slab uppercase font-bold ubuntu -tracking-wider 
        ${mobile ? "md:text-4xl" : "md:m-0 md:pl-0 md:pr-6 md:text-4xl"}`}>{title}</h4>
      <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 left-0 w-full bg-slate-900 ${mobile ? "md:block md:h-1" : "md:hidden"}`}></div>
    </div>
  )
}

export default SectionTitle