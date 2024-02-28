const ProductModal = ({ product, showModal, onCloseModal }) => {
  if(showModal) {
    return(
      <div className="top-0 left-0 fixed flex w-full h-screen items-center justify-center bg-gray-700/50 z-10">
        <section className="bg-white p-10 flex flex-col rounded shadow gap-10 w-1/2">
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
            <div className="flex items-center text-cyan-700 text-sm gap-1">
              Name: 
              <span className="font-semibold">{product.name}</span>
            </div>
            <div className="flex items-center text-cyan-700 text-sm gap-1">
              Price: 
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="flex flex-col text-cyan-700 text-sm gap-1">
              Description: 
              <span className="font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repellendus magnam, atque vero illo nam vitae officia nostrum, optio iure, repellat beatae blanditiis quisquam eaque inventore debitis magni excepturi necessitatibus!
              </span>
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