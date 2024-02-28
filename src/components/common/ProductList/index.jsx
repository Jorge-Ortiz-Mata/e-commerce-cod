import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { productsAtom } from "../../../store";
import Product from "../Product";

const ProductList = () => {
  const [products] = useAtom(productsAtom);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sortConfig, setSortConfig] = useState(true);

  const sortProducts = () => {
    let productsSorted;

    if(sortConfig) {
      productsSorted = productsFiltered.sort((a,b) => b.price - a.price);
      setSortConfig(false);
    } else {
      productsSorted = productsFiltered.sort((a,b) => a.price - b.price);
      setSortConfig(true);
    }

    setProductsFiltered(productsSorted);
  }

  useEffect(() => {
    const productsFiltered = products.filter(product => {
      return product.name.includes(inputValue);
    });

    if(productsFiltered.length > 0) {
      setProductsFiltered(productsFiltered);
    } 
  }, [inputValue, products]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }  

  return(
    <div className="flex flex-col w-full h-full gap-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg text-cyan-700">Current Products</h3>
        
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
      <div className="flex">
        <button className="text-sm text-gray-500 font-semibold" onClick={sortProducts}>
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