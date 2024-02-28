import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { productsAtom } from "../../../store";
import Product from "../Product";

const ProductList = () => {
  const [products] = useAtom(productsAtom);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const productsFiltered = products.filter(product => {
      return product.name.includes(inputValue);
    });

    if(productsFiltered.length > 0) {
      setProductsFiltered(productsFiltered);
    } 

  }, [inputValue]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  return(
    <div className="flex flex-col w-full h-full gap-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg text-cyan-700">Your Products</h3>
        
        <form>
          <input 
            type="text"
            id="search"
            name="search"
            className="border py-1 px-2 text-sm text-gray-600 rounded"
            value={inputValue}
            placeholder="search product"
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="flex flex-col gap-3">
        {
          productsFiltered.map(product => {
            return <Product key={product.name} product={product} />
          })
        }
      </div>
    </div>
  )
}

export default ProductList;