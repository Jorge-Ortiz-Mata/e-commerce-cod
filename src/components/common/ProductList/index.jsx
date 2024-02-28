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

  const sortByPrice = () => {
    // products.sort((a, b) => {
    //   return parseInt(a.price) - parseInt(b.price);
    // });
  }

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

      <div className="flex items-center justify-end">
        <button 
          onClick={sortByPrice}
          className="text-sm text-white bg-orange-500 rounded px-3 py-1"
        >
          Sort by price
        </button>
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