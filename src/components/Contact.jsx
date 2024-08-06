import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, MapPin } from "lucide-react";

import Button from "./Button";
import LabelInput from "./LabelInput";

const Contact = () => {
  const position = [13.718442747208801, -89.18554732243021];
  return (
    <section id="contact" className="w-full flex pt-17 pb-16 pt-23">
      <article className="m-auto w-96 w-mid w-192 bg-slate-800/10 flex flex-wrap">
        <h4 className="w-full p-4 mt-4 text-center font-semibold text-slate-900 text-4xl">Contacto</h4>
        <div className="w-2-5 px-4 md:mx-auto pb-20 flex flex-col justify-around">
          <div className="w-full h-48 py-4">
            <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Parque Colonia Monpegon, 39 Calle Oriente, San Salvador, El Salvador
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="flex items-center my-2">
            <span className="p-1-5 ml-6 w-fit h-fit border border-slate-900 rounded-full"><MapPin size={22} strokeWidth={1.5} color="#0f172a" /></span>
            <span className="font-normal text-xs ml-4">Parque Colonia Monpegon, 39 Calle Oriente, San Salvador, El Salvador</span>
          </div>
          <div className="flex items-center my-2">
            <span className="p-1-5 ml-6 w-fit h-fit border border-slate-900 rounded-full"><Phone size={22} strokeWidth={1.5} color="#0f172a" /></span>
            <span className="font-normal text-sm ml-4">+52 81 1583 5723</span>
          </div>
        </div>
        <form className="w-3-5 w-full px-4 text-sm">
          <div className="flex mb-4 mt-3 w-full">
            <LabelInput className={`w-1/2 pr-2`} label={`Nombre(s)`} placeholder="Nombre..." />
            <LabelInput className={`w-1/2 pl-2`} label={`Apellidos`} placeholder="Apellidos..." />
          </div>
          <LabelInput className={`mb-10`} label={`Correo electrónico`} placeholder="correo@email.com" />
          <LabelInput className={`mb-4`} label={`Asunto`} placeholder="Asunto..." />
          <LabelInput className={`mb-6`} label={`Mensaje`} placeholder="Mensaje..." isTextArea={true} />
          <div className="flex justify-center pb-6">
            <Button className={`bg-slate-800 custom-principal-btn01 text-slate-100 px-5 py-2 text-lg rounded-full mx-auto`}>Enviar</Button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Contact;