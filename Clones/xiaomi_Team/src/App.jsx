import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

let App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
