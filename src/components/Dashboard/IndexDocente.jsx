import { useState } from "react";
import Button from "../Button";
import MaterialCard from "./MaterialCard";

const IndexDocente = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <div className="w-full h-full relative flex">

      <div className="w-2/3">

        <div className="h-52 flex pr-8 pt-2">
          <article className="w-full h-full bg-teal-600/70 rounded-3xl flex items-center justify-evenly text-slate-50">

            <div className="h-48 aspect-square pt-9 pb-3 px-6 relative">
              <div className="absolute top-2 left-0 w-full text-center font-semibold text-xl">2° Grado</div>
              <img className="w-full h-full object-cover rounded-full" src="https://img.freepik.com/premium-photo/group-people-sitting-enchanted-meeting-chairs-with-smiling-faces-dreamy-background-3d-f_980716-330058.jpg?w=360" alt="Grupo de personas 3d" />
            </div>

            <div className="rounded-xl flex flex-col justify-evenly items-center h-40 p-4 bg-slate-50 text-slate-900">

              <p className="text-xs flex justify-between w-full -mt-1 mb-auto"><span><strong>Aula</strong>: 205</span><span><strong>Alumnos</strong>: 21</span></p>

              <div className="mb-2">
                <p className="font-semibold text-sm">Última Tarea:</p>
                <p className="py-1 px-3 rounded-full bg-slate-200/50 font-semibold text-slate-700 w-fit text-sm">
                  Entregadas: <strong className="text-teal-600/80">19</strong>/21
                </p>
              </div>

              <div className="">
                <p className="font-semibold text-sm">Última Examen:</p>
                <p className="py-1 px-3 rounded-full bg-slate-200/50 font-semibold text-slate-700 w-fit text-sm">
                  Entregadas: <strong className="text-teal-600/80">21</strong>/21
                </p>
              </div>

            </div>

          </article>
        </div>

        <div className="custom-h-docente mr-8 mt-4 bg-slate-50 p-4 rounded-3xl shadow">

          <div className="col-start-1 col-end-4 flex justify-between items-center mb-2">
            <span className="px-2 text-lg font-semibold">Material Reciente</span>
            <div className="pr-2">
              <label className="text-sm">
                <span className="mr-2">Materia: </span>
                <select name="" id="" className="py-1 px-2">
                  <option value="all">Todas</option>
                  <option value="es">Español</option>
                  <option value="mat">Matemáticas</option>
                  <option value="bio">Biología</option>
                </select>
              </label>

              <Button className={`bg-green-500/80 text-slate-50 px-2 py-1 rounded-md ml-2 hover:bg-green-500/50`}>Agregar</Button>
              <Button className={`bg-amber-500/80 text-slate-50 px-2 py-1 rounded-md ml-2 hover:bg-amber-500/50`} onClick={toggleEditMode}>Editar</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 grid-flow-row [grid-auto-rows:48%] overflow-y-auto custom-h-index-material-grid custom-scroll pl-1 pr-3 pt-3">

            <MaterialCard
              img_url="https://img.freepik.com/premium-photo/3d-rendering-open-book-yellow-background_968898-438.jpg?w=740"
              img_alt="Libros en 3D" title="Libro de Español 2" type="PDF" buttonText="Ir al PDF" canDeleteEdit={editMode}
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-photo/clipboard-with-checklist-paper-note-icon-symbol-purple-background-3d-rendering_56104-1491.jpg?t=st=1723072666~exp=1723076266~hmac=2baef0f27d999610781fb81c7e69e42a3fac47c7f9db747c92a3ecc730afbec5&w=740"
              img_alt="Artículo 3D" title="Artículo Medicina" type="PDF" buttonText="Ir al PDF" canDeleteEdit={editMode}
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-photo/checklist-clipboard-pencil-icon-sign-symbol-reminder-checkbox-document-report-concept-pink-background-3d-rendering_56104-1434.jpg?t=st=1723071492~exp=1723075092~hmac=47f12821a7bb9fde42a4ecec8bf5d1d8ae30e30ca97890a76a3390fbe865127c&w=740"
              img_alt="Lista en 3D" title="Artículo Electrodinámica" type="PDF" buttonText="Ir al Artículo" canDeleteEdit={editMode}
            />

            <MaterialCard
              img_url="https://img.freepik.com/premium-photo/video-player-icon-social-media-live-stream-browser-live-digital-stream-multimedia-player-online-video-sites-video-service-video-media-concept-3d-render-illustration-cartoon-minimal_473922-1293.jpg?w=826"
              img_alt="3D Video Button" title="Tutorial integrales" type="Video" buttonText="Ir al Video" canDeleteEdit={editMode}
            />

            <MaterialCard
              img_url="https://img.freepik.com/free-psd/pile-books-3d-render-isolated_47987-15465.jpg?t=st=1723071071~exp=1723074671~hmac=4c875f1f2ca406837c94997c7c525296d3ba650aaa8947813855cad15617eaee&w=740"
              img_alt="Libros en 3D" title="Libro de Biología" type="PDF" buttonText="Ver el libro" canDeleteEdit={editMode}
            />

            <MaterialCard
              img_url="https://img.freepik.com/premium-vector/3d-white-clipboard-task-management-todo-check-list-purple-background-efficient-work-project-plan-concept-assignment-exam-productivity-solution-icon-3d-icon-vector-render-illustration_412828-1290.jpg?w=740"
              img_alt="Artículo 3D" title="Estudio nivel económico" type="PDF" buttonText="Ir al PDF" canDeleteEdit={editMode}
            />

          </div>

        </div>

      </div>

      <div className="w-1/3 custom-h-index-side mt-10 text-slate-900">

        <div className="w-full custom-h-inner-side bg-slate-50 shadow rounded-3xl mb-4 flex flex-col">
        </div>

        <div className="w-full custom-h-inner-side bg-slate-50 shadow rounded-3xl">
        </div>

      </div>

    </div>
  )
}

export default IndexDocente;