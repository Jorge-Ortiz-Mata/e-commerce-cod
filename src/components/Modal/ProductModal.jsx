import { FaCartPlus, FaClipboardList } from "react-icons/fa";
import { useAtom } from "jotai";
import { productsCartAtom } from "../../store";

const ProductModal = ({ product, showModal, onCloseModal }) => {
  const [productsCart, setProductsCart] = useAtom(productsCartAtom);

  const addToCart = () => {
    const productFound = productsCart.find(item => {
      return item.name === product.name
    });

    if(productFound) {
      setProductsCart(
        productsCart.map(item => {
          if (item.name === product.name)
            return { ...item, quantity: item.quantity + 1, 
          };
          return item;
        })
      );
    } else {
      setProductsCart(prevState => {
        return [...prevState, { name: product.name, price: product.price, quantity: 1 }]
      });
    }
  }

  if(showModal) {
    return(
      <div className="top-0 left-0 fixed flex w-full h-screen items-center justify-center bg-gray-700/50 z-10">
        <section className="bg-white p-10 flex flex-col rounded shadow gap-10 w-11/12 sm:w-2/3 lg:w-1/2">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-cyan-700 text-lg">Product Information</h3>
              <button 
                className="text-red-500 text-sm font-semibold"
                onClick={onCloseModal}
              >
                Close
              </button>
            </div>
            <hr />
          </div>
          <div className="flex flex-col w-full gap-3">
            <div className="text-sm text-cyan-700 flex items-center gap-2">
              {
                product?.image.length > 0
                ? <div className="flex items-center justify-center w-full">
                    <img src={product.image} alt="product-image" className="w-40 h-40 rounded-full" />
                  </div>
                : <div className="flex items-center justify-center w-full">
                    <div className="bg-gray-500 w-40 h-40 rounded-full"></div>
                </div> 
              }
            </div>

            <div className="flex items-center text-cyan-700 text-xs sm:text-sm gap-1">
              Name: 
              <span className="font-semibold">{product.name}</span>
            </div>
            <div className="flex items-center text-cyan-700 text-xs sm:text-sm gap-1">
              Price: 
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="flex flex-col text-cyan-700 text-xs sm:text-sm gap-1">
              Description: 
              <span className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repellendus magnam, atque vero illo nam vitae officia nostrum, optio iure, repellat beatae blanditiis quisquam eaque inventore debitis magni excepturi necessitatibus!
              </span>
            </div>
            <div className="flex w-full items-center justify-end">
              <button onClick={addToCart} className="text-blue-500 font-semibold text-sm">
                <button onClick={addToCart} className="bg-blue-500 text-white flex items-center px-2 py-1 rounded font-semibold text-xs gap-2">
                  <FaCartPlus />
                  Add
                </button>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <></>
  }
};

export default ProductModal;