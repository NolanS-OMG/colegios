const Portrait = () => {
  return (
    <header className="-z-50 hidden lg:flex relative custom-lg-vh bg-transparent">
      <div className="w-2/4 m-auto">
        <h1 className="roboto-slab text-7xl font-medium text-right">
          El mejor lugar <br /> para <span className="text-teal-800 underline decoration-8">aprender</span>
        </h1>
        <p className="ml-10 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus suscipit,
          reprehenderit cupiditate consectetur, consequuntur itaque molestias,
          possimus eaque iure numquam eos laboriosam alias nulla quam velit voluptatum
          porro enim? Corrupti?
        </p>
      </div>
      <div className="w-2/4 h-full relative">
        <div className="custom-bubble-shadow absolute bottom-8 left-40 size-40 rounded-full overflow-hidden">
          <img src="https://neurodesarrollar.com/wp-content/uploads/2017/10/quienes-somos.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-8 left-16 size-80 rounded-full overflow-hidden">
          <img src="https://www.cein.eu/wp-content/uploads/2019/10/ingles-todo-el-a%C3%B1o.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="absolute bottom-36 right-16 size-56 rounded-full overflow-hidden">
          <img src="https://images.indianexpress.com/2020/11/online-class-1200.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="-z-10 absolute -left-16 bottom-10 size-16 rounded-full bg-teal-700/20"></div>
        <div className="-z-10 absolute -left-192 top-10 size-40 rounded-full bg-teal-700/20"></div>
      </div>
    </header>
  )
}

export default Portrait;