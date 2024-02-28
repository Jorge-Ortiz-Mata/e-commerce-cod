import { useAtom } from "jotai";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { productsCartAtom } from "../../../store";

const CartProduct = ({ product }) => {
  const [products, setProducts] = useAtom(productsCartAtom);

  const addToCart = () => {
    setProducts(
      products.map(item => {
        if (item.name === product.name)
          return { 
            ...item, quantity: item.quantity + 1, 
          };

        return item;
      })
    );
  }

  const removeFromCart = () => {
    const productFound = products.find(item => item.name === product.name);

    if(productFound.quantity > 1) {
      setProducts(
        products.map(item => {
          if (item.name === product.name) {
            return { 
              ...item, quantity: item.quantity - 1, 
            };
          } else {
            return item;
          } 
        })
      );
    } else {
      setProducts(
        products.filter(item => item.name !== productFound.name)
      )
    }
  }

  return(
    <div key={product.name} className="flex flex-col border border-cyan-700 w-full rounded p-3">
      <div className="flex items-center justify-between text-cyan-700 text-sm gap-1">
        <div className="flex items-center text-sm gap-1">
          Name: <span className="font-semibold">{product.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-lg text-green-500" onClick={addToCart}>
            <FaPlusCircle />
          </button>
          <button className="text-lg text-red-500" onClick={removeFromCart}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="flex items-center text-cyan-700 text-sm gap-1">
        Price: $ <span className="font-semibold">{product.price} USD</span>
      </div>
      <div className="flex items-center text-cyan-700 text-sm gap-1">
        Total Price: $ <span className="font-semibold">{product.price * product.quantity} USD</span>
      </div>
      <div className="flex items-center text-cyan-700 text-sm gap-1">
        Quantity: <span className="font-semibold">{product.quantity} pz.</span>
      </div>
    </div>
  );
};

export default CartProduct;