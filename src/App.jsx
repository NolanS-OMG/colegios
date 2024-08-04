import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ComponentWithNavBar from "./components/ComponentWithNavBar"

function App() {

  return (
    <Routes>
      <Route path="/" element={<ComponentWithNavBar component={<HomePage />} />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App;
