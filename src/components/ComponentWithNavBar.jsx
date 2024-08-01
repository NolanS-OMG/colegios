import Navbar from "./Navbar.jsx";

const ComponentWithNavBar = ({ component }) => {
  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default ComponentWithNavBar;