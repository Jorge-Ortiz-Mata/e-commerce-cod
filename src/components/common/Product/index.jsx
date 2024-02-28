import { useState } from "react";
import { useAtom } from "jotai";
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

          <button onClick={addToCart} className="text-blue-500 font-semibold text-sm">
            Add to the cart
          </button>
        </div>

        <div className="text-sm text-cyan-700">
          Price: <span className="font-semibold">{product?.price}</span>
        </div>

        <div 
          onClick={ () => setShowModal(true) }
          className="text-sm text-cyan-700 underline cursor-pointer italic"
          >
          See product details
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