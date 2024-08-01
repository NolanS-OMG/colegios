import Button from "./Button";

import { MousePointerClick } from "lucide-react"

const Portrait = () => {
  return (
    <header className="flex flex-wrap lg:flex-nowrap relative custom-lg-vh bg-transparent mt-8" id="home">
      <div className="block lg:hidden relative w-full h-32">
        <div className="-z-10 absolute custom-left-middle top-0 h-full aspect-square rounded-full bg-transparent custom-bubble-shadow-mobile"></div>
      </div>
      <div className="z-10 flex flex-col lg:w-2/4 m-auto">
        <h1 className="roboto-slab text-4xl lg:text-7xl font-medium text-center lg:text-right">
          El mejor lugar <br /> para <span className="text-teal-800 underline decoration-4 lg:decoration-8">aprender</span>
        </h1>
        <p className="mx-6 lg:ml-10 mt-4 text-sm lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus suscipit,
          reprehenderit cupiditate consectetur, consequuntur itaque molestias,
          possimus eaque iure numquam eos laboriosam
        </p>
        <Button className="mx-auto mt-12 lg:mr-0 lg:ml-auto lg:mt-4 px-9 py-3 text-slate-100 text-lg lg:text-xl font-semibold rounded-full bg-teal-700 custom-principal-btn">
          <span className="inline">Agenda ahora</span>
          <MousePointerClick className="ml-4 inline" size={24} />
        </Button>
      </div>
      <div className="hidden lg:block w-2/4 h-full relative">
        <div className="absolute bottom-8 left-40 size-40 rounded-full overflow-hidden">
          <img src="https://neurodesarrollar.com/wp-content/uploads/2017/10/quienes-somos.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-8 left-16 size-80 rounded-full overflow-hidden">
          <img src="https://www.cein.eu/wp-content/uploads/2019/10/ingles-todo-el-a%C3%B1o.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="absolute bottom-36 right-16 size-56 rounded-full overflow-hidden">
          <img src="https://images.indianexpress.com/2020/11/online-class-1200.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="-z-10 absolute left-3 -bottom-32 size-237 rounded-full bg-teal-700/20"></div>
        <div className="-z-10 absolute -left-16 bottom-10 size-16 rounded-full bg-teal-700/20"></div>
        <div className="-z-10 absolute -left-192 top-10 size-40 rounded-full bg-teal-700/20"></div>
      </div>
    </header>
  )
}

export default Portrait;