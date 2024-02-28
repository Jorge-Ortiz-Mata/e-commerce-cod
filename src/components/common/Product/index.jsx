import { useState } from "react"
import ProductModal from "../../Modal/ProductModal"

const Product = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnCloseModal = () => {
    setShowModal(false);
  }  

  return(
    <>
      <div className="flex flex-col w-full rounded p-5 border border-cyan-600">
        <div className="text-sm text-cyan-700">
          Name: <span className="font-semibold">{product?.name}</span>
        </div>

        <div className="text-sm text-cyan-700">
          Price: <span className="font-semibold">{product?.price}</span>
        </div>

        <div 
          onClick={ () => setShowModal(true) }
          className="text-sm text-cyan-700 underline cursor-pointer italic mt-2"
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