import InfoImage from "./InfoImage";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="flex flex-wrap relative w-full px-4 lg:px-16 py-16 pt-17 pt-23">
      <SectionTitle title={`¿Quienes somos?`} />
      <div className="w-full lg:w-2/3 lg:h-102 m-0 lg:mt-6 px-2 lg:px-6 flex flex-col">
        <p className="my-4 text-center lg:text-left leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque error quisquam asperiores cumque magnam quidem inventore, placeat illo impedit corporis exercitationem veniam alias, itaque tenetur nihil accusamus dolore iste repellat!</p>
        <p className="my-4 text-center lg:text-left leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit ex repellendus dolores quasi, a tempore, doloremque ipsum nulla, nam voluptas quidem odio! In, officia nobis minima eveniet quod dolorum!</p>
        <p className="lg:block hidden my-4 text-center lg:text-left leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum possimus nam magni, minus, dolores quam ipsam ducimus numquam ullam necessitatibus consequatur officia quidem illum.</p>
        <p className="lg:block hidden text-sm mt-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, sit totam dolorum quasi quod alias debitis voluptatum distinctio nisi placeat deserunt minus eligendi repellendus impedit natus accusantium laborum, praesentium est.</p>
      </div>
      <div className="w-full lg:w-1/3 lg:h-102 mt-3 lg:mt-6 px-4 lg:pl-0 lg:pr-2 flex flex-col">
        <InfoImage
          url={`https://images.adsttc.com/media/images/57ca/cf48/e58e/ce85/9a00/0058/large_jpg/14054355_10154288362800781_6007310381305214592_o.jpg?1472909123`}
          alt="Instalaciones de la escuela"
          info={`Instalaciones de la escuela, mas de 10 años en operaciones`}
          className={"my-2 lg:mx-12"}
        />
        <InfoImage
          url={`https://thorsmex.mx/wp-content/uploads/2015/11/render-escuela-nuevo.jpg`}
          alt="Instalaciones de la escuela"
          info={`Nuestros salones de clase`}
          className={"my-4 lg:mx-12 hidden lg:block"}
        />
      </div>
      <div className="w-full h-fit flex justify-evenly flex-col lg:flex-row mt-12">
        <article className="w-full lg:w-1/3 mb-6">
          <SectionTitle title={`Misión`} mobile={true} className="mt-6" />
          <p className="mt-8 px-4 text-center lg:text-left lg:text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus, commodi aliquid neque officiis ipsam exercitationem assumenda, harum sint veritatis, totam cupiditate earum tempora perferendis expedita dolore magni quibusdam mollitia!</p>
        </article>
        <article className="w-full lg:w-1/3 mb-6">
          <SectionTitle title={`Visión`} mobile={true} className="mt-6" />
          <p className="mt-8 px-4 text-center lg:text-left lg:text-lg leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque voluptate nulla saepe similique architecto, placeat, sit harum quia sapiente error hic! Porro consequatur optio quisquam, dolorum quam sit? Minima!</p>
        </article>
      </div>
    </section>
  )
}

export default About;