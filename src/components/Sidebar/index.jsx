import { Link } from "react-router-dom";

const Sidebar = () => {

  return(
    <aside className="flex flex-col w-80 gap-10 py-5">
      <div className="flex flex-col w-full p-5">
        <h4 className="text-cyan-700 font-semibold text-xl">E-commerce</h4>
        <p className="text-cyan-700 text-sm">Codifin Web Application</p>
      </div>

      <ul className="flex flex-col w-full">
        <li className="text-cyan-700 font-semibold w-full bg-gradient-to-r from-cyan-100 p-2 to-white duration-300 hover:text-cyan-400">
          <Link to="/">Home</Link>
        </li>
        <li className="text-cyan-700 font-semibold w-full bg-gradient-to-r from-cyan-100 p-2 to-white duration-300 hover:text-cyan-400">
          <Link to="/products">Products</Link>
        </li>
        <li className="text-cyan-700 font-semibold w-full bg-gradient-to-r from-cyan-100 p-2 to-white duration-300 hover:text-cyan-400">  
          <Link to="/products/new">New product</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;