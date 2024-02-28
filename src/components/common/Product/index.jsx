const Product = ({ product }) => {

  return(
    <div className="flex flex-col w-full rounded p-5 border border-cyan-600">
      <div className="text-sm text-cyan-700">
        Name: <span className="font-semibold">{product?.name}</span>
      </div>

      <div className="text-sm text-cyan-700">
        Price: <span className="font-semibold">{product?.price}</span>
      </div>
    </div>
  )
}

export default Product