import NivelEducativoCard from "./NivelEducativoCard";
import TitleWithBorder from "./TitleWithBorder";

const OfertaEducativa = () => {
  return (
    <section id="offert" className="mx-8 lg:mx-16 mt-20">
      <TitleWithBorder
        text={`Oferta Educativa`}
        className={`hidden lg:block mx-auto w-fit text-8xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleOfertaEducativa`}
        offSet={80}
      />
      <TitleWithBorder
        text={`Oferta`}
        className={`lg:hidden block mx-auto w-fit text-6xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleOferta`}
        offSet={80}
        mobile={true}
      />
      <TitleWithBorder
        text={`Educativa`}
        className={`lg:hidden block mx-auto w-fit text-6xl text-center font-bold text-transparent tracking-wide roboto-slab`}
        id={`titleEducativa`}
        offSet={80}
        mobile={true}
      />
      <article className="w-full h-fit lg:px-16 my-16 flex flex-col lg:flex-row lg:justify-evenly lg:h-80">
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Jardín de niños" rango={"3 años en adelante"} texto1={`Profesores especializados`} texto2={`Material Gratis`} texto3={`Monitoreo Continuo`}
        />
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Primaria" rango={"6 años en adelante"} texto1={`Actividades de Formación`} texto2={`Descuentos especiales`} texto3={`Monitoreo Continuo`}
        />
        <NivelEducativoCard className={`my-4 lg:my-0`}
          title="Secundaria" rango={"12 años en adelante"} texto1={`Practica real`} texto2={`Apoyo en vocación`} texto3={`Monitoreo Continuo`}
        />
      </article>
    </section>
  )
}

export default OfertaEducativa;