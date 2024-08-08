import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ComponentWithNavBar from "./components/ComponentWithNavBar";
import AccessPage from "./components/AccessPage";
import Dashboard from "./components/Dashboard.jsx";

import DashboardIndex from "./components/Dashboard/Index.jsx";

import { UserContext } from "./context/UserContext.jsx";
import { useState } from "react";

import { users } from "./constants";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <Routes>
        <Route path="/" element={<ComponentWithNavBar component={<HomePage />} />} />

        <Route path="/login">
          <Route index element={<AccessPage />} />
          <Route path="alumno" element={<AccessPage />} />
          <Route path="padre" element={<AccessPage />} />
          <Route path="docente" element={<AccessPage />} />
          <Route path="admin" element={<AccessPage />} />
        </Route>

        <Route path="/usuario">
          <Route index element={<Dashboard />} />

          <Route path="alumno/:id" element={<Dashboard />}>
            <Route index element={<DashboardIndex />} />
            <Route path="calendario" element={<div>CALENDARIO</div>} />
            <Route path="calificaciones" element={<div>CALIFICACIONES</div>} />
            <Route path="tareas" element={<div>TAREAS</div>} />
            <Route path="material" element={<div>MATERIAL</div>} />
            <Route path="asistencia" element={<div>ASISTENCIA</div>} />
          </Route>

          <Route path="padre/:id" element={<Dashboard />}>
            <Route index element={<div></div>} />
            <Route path="calendario" element={<div>CALENDARIO</div>} />
            <Route path="calificaciones" element={<div>CALIFICACIONES</div>} />
            <Route path="tareas" element={<div>TAREAS</div>} />
            <Route path="material" element={<div>MATERIAL</div>} />
            <Route path="asistencia" element={<div>ASISTENCIA</div>} />
          </Route>

          <Route path="docente/:id" element={<Dashboard />} >
            <Route index element={<div></div>} />
            <Route path="calendario" element={<div>CALENDARIO</div>} />
            <Route path="calificaciones" element={<div>CALIFICACIONES</div>} />
            <Route path="tareas" element={<div>TAREAS</div>} />
            <Route path="material" element={<div>MATERIAL</div>} />
            <Route path="asistencia" element={<div>ASISTENCIA</div>} />
          </Route>

          <Route path="admin/:id" element={<Dashboard />} />

        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
