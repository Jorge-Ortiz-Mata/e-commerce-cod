import { FaHome, FaPlusCircle, FaBoxes, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return(
    <aside className="flex flex-col w-80 gap-10 py-5 border-r shadow">
      <div className="flex flex-col w-full p-5">
        <h4 className="text-cyan-700 font-semibold text-xl">E-commerce</h4>
        <p className="text-cyan-700 text-sm">Codifin Web Application</p>
      </div>

      <ul className="flex flex-col w-full">
        <li className={`duration-300 hover:text-cyan-400 text-cyan-700 font-semibold p-2 w-full ${ location.pathname == "/" ? "bg-gradient-to-r from-cyan-100 to-white" : "bg-white"}`}>
          <Link to="/" className="flex items-center gap-2 w-full">
            <FaHome />
            Home
          </Link>
        </li>
        <li className={`duration-300 hover:text-cyan-400 text-cyan-700 font-semibold p-2 w-full ${ location.pathname == "/products" ? "bg-gradient-to-r from-cyan-100 to-white" : "bg-white"}`}>
          <Link to="/products" className="flex items-center gap-2 w-full">
            <FaBoxes />
            Products
          </Link>
        </li>
        <li className={`duration-300 hover:text-cyan-400 text-cyan-700 font-semibold p-2 w-full ${ location.pathname == "/products/new" ? "bg-gradient-to-r from-cyan-100 to-white" : "bg-white"}`}>
          <Link to="/products/new" className="flex items-center gap-2 w-full">
            <FaPlusCircle />
            New product
          </Link>
        </li>
        <li className={`duration-300 hover:text-cyan-400 text-cyan-700 font-semibold p-2 w-full ${ location.pathname == "/cart" ? "bg-gradient-to-r from-cyan-100 to-white" : "bg-white"}`}>
          <Link to="/cart" className="flex items-center gap-2 w-full">
            <FaShoppingCart />  
            My Cart
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;