import { useState } from "react";
import { useAtom } from "jotai";
import { FaCartPlus, FaClipboardList } from "react-icons/fa";
import { productsCartAtom } from "../../../store";
import ProductModal from "../../Modal/ProductModal"

const Product = ({ product }) => {
  const [productsCart, setProductsCart] = useAtom(productsCartAtom);
  const [showModal, setShowModal] = useState(false);

  const handleOnCloseModal = () => {
    setShowModal(false);
  }  

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

  return(
    <>
      <div className="flex flex-col w-full rounded p-5 border border-cyan-600 gap-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-cyan-700 flex items-center gap-2">
            {
              product?.image.length > 0
              ? <div className="flex items-center justify-center w-full">
                  <img src={product.image} alt="product-image" className="w-7 h-7 rounded-full" />
                </div>
              : <div className="flex items-center justify-center w-full">
                  <div className="bg-gray-500 w-7 h-7 rounded-full"></div>
              </div> 
            }
            <div className="flex items-center gap-1">
              <span className="font-semibold">{product?.name}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <button onClick={addToCart} className="bg-blue-500 text-white flex items-center px-2 py-1 rounded font-semibold text-xs gap-2">
              <FaCartPlus />
              Add
            </button>

            <div 
              onClick={ () => setShowModal(true) }
              className="bg-orange-500 text-white flex items-center px-2 py-1 rounded font-semibold text-xs gap-2 cursor-pointer"
              >
              <FaClipboardList />
              See more
            </div>
          </div>
        </div>

        <div className="text-sm text-cyan-700">
          Price: <span className="font-semibold">$ {product?.price} USD</span>
        </div>

        <div className="text-sm text-cyan-700 gap-1 flex items-center">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed illo voluptatem quasi cumque saepe soluta
        </div>
      </div>

      <ProductModal 
        product={product} 
        showModal={showModal} 
        onCloseModal={handleOnCloseModal} 
      />
    </>
  )
}

export default Product