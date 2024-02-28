import { useAtom } from "jotai";
import { productsAtom } from "../store";
import PageTitle from "../components/common/PageTitle";
import ProductList from "../components/common/ProductList";

const ProductsPage = () => {
  const [products] = useAtom(productsAtom);

  return(
    <section className="flex flex-col w-full h-full overflow-auto bg-slate-50">
      <PageTitle title="Products" />

      <section className="flex flex-col w-full h-full p-5">
        <div className="flex flex-col w-full h-full p-5 bg-white rounded shadow border items-center justify-center gap-5">
          {
            products.length > 0
            ? <ProductList />
            : <p className="text-gray-500 font-semibold text-sm">There are not products registered</p>
          }
        </div>
      </section>
    </section>
  );
};

export default ProductsPage;