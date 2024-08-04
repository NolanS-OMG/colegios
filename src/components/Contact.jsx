import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, MapPin } from "lucide-react";

import { useState, useRef, useEffect } from "react";
import Button from "./Button";

const AutoResizeTextarea = ({ className, ...props }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;

      // Save the current scroll position
      const scrollPosition = window.pageYOffset;

      // Adjust the textarea height
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;

      // Restore the scroll position
      window.scrollTo(0, scrollPosition);
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className={className}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

const LabelInput = ({ className, spanClassName, inputClassName, label, isTextArea = false }) => {
  return (
    <label className={`flex flex-col ${className}`}>
      <span className={`text-xs ${spanClassName}`}>{label}:</span>
      {isTextArea ? <AutoResizeTextarea className={`px-2 py-1 min-h-32 ${inputClassName}`}></AutoResizeTextarea> : <input type="text" className={`px-2 py-1 ${inputClassName}`} />}
    </label>
  )
}

const Contact = () => {
  const position = [13.718442747208801, -89.18554732243021];
  return (
    <section id="contact" className="w-full flex pt-17 pb-16 pt-23">
      <article className="m-auto w-96 w-192 bg-slate-800/10 flex flex-wrap">
        <h4 className="w-full p-4 mt-4 text-center font-semibold text-slate-900 text-4xl">Contacto</h4>
        <div className="w-2-5 px-4 pb-20 flex flex-col justify-around">
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
        <form className="w-3-5 w-full px-4">
          <div className="flex mb-4 mt-3 w-full">
            <LabelInput className={`w-1/2 pr-2`} label={`Nombre(s)`} />
            <LabelInput className={`w-1/2 pl-2`} label={`Apellidos`} />
          </div>
          <LabelInput className={`mb-10`} label={`Correo electrónico`} />
          <LabelInput className={`mb-4`} label={`Asunto`} />
          <LabelInput className={`mb-6`} label={`Mensaje`} isTextArea={true} />
          <div className="flex justify-center pb-6">
            <Button className={`bg-slate-800 custom-principal-btn01 text-slate-100 px-5 py-2 text-lg rounded-full mx-auto`}>Enviar</Button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Contact;