import { useAtom } from "jotai";
import { productsAtom } from "../../../store";
import Product from "../Product";

const ProductList = () => {
  const [products] = useAtom(productsAtom);

  return(
    <div className="flex flex-col w-full h-full gap-5">
      <h3 className="font-semibold text-lg text-cyan-700">Your Products</h3>
      <div className="flex flex-col gap-3">
        {
          products.map(product => {
            return <Product key={product.name} product={product} />
          })
        }
      </div>
    </div>
  )
}

export default ProductList;