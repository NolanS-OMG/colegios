const SectionTitle = ({ title, className = "", mobile = false }) => {
  return (
    <div className={`flex w-full h-fit bg-transparent ${mobile ? "" : "lg:bg-slate-900 lg:block"} relative ${className}`}>
      <h4
        className={`z-10 w-fit m-auto px-2 text-slate-900 bg-slate-100 
        text-2xl roboto-slab uppercase font-bold ubuntu -tracking-wider 
        ${mobile ? "lg:text-4xl" : "lg:m-0 lg:pl-0 lg:pr-6 lg:text-4xl"}`}>{title}</h4>
      <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 left-0 w-full bg-slate-900 ${mobile ? "lg:block lg:h-1" : "lg:hidden"}`}></div>
    </div>
  )
}

export default SectionTitle