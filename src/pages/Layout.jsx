import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"

const LayoutPages = () => {

  return(
    <main className="flex w-full h-screen">
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default LayoutPages;