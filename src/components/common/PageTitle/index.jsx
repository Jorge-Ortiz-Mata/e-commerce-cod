import { useAtom } from "jotai";
import { productsCartAtom } from "../../../store";
import { FaShoppingCart } from "react-icons/fa";

const PageTitle = ({ title }) => {
  let totalProducts = 0
  const [productsCart] = useAtom(productsCartAtom);

  if(productsCart.length > 0) {
    productsCart.forEach(product => {
      totalProducts = totalProducts + product.quantity 
    });
  };

  return(
    <div className="flex items-center p-5 bg-white shadow border justify-between">
      <h1 className="font-bold text-xl text-cyan-700">
        {title}
      </h1>

      <div className="flex items-center gap-2">
        <span className="text-cyan-700 font-semibold">{totalProducts}</span>
        <span className="text-xl text-cyan-700">
          <FaShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default PageTitle;