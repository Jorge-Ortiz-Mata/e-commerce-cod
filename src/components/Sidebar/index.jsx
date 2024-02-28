import { Link } from "react-router-dom";

const Sidebar = () => {

  return(
    <aside className="flex flex-col w-80 gap-10 py-5">
      <div className="flex flex-col w-full p-5">
        <h4 className="text-cyan-700 font-semibold text-xl">E-commerce</h4>
        <p className="text-cyan-700 text-sm">Codifin Web Application</p>
      </div>

      <ul className="flex flex-col w-full">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>  
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;