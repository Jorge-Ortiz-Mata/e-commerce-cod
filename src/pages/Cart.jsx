import { useAtom } from "jotai";
import { productsCartAtom } from "../store";
import PageTitle from "../components/common/PageTitle"
import CartProduct from "../components/common/CartProduct";

const CartPage = () => {
  let totalPrice = 0.0;
  const [products] = useAtom(productsCartAtom);

  products.forEach(product => {
    totalPrice = totalPrice + (product.price * product.quantity)
  });

  return(
    <section className="flex flex-col w-full h-full overflow-auto bg-slate-50">
      <PageTitle title="My Cart" />
      <section className="flex flex-col w-full h-full p-5">
        <div className="flex flex-col w-full h-full p-5 bg-white rounded shadow border gap-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-cyan-700">Your Products</h3>
            <p className="text-green-600 font-semibold text-sm">$ {totalPrice} USD</p>
          </div>
          
          {
            products.map(product => {
              return(
                <CartProduct product={product} />
              )
            })
          }
        </div>
      </section>
    </section>
  );
};

export default CartPage;