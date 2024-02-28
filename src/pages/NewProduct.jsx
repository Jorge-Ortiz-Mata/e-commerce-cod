import PageTitle from "../components/common/PageTitle";
import NewProductForm from "../components/common/forms/NewProduct";

const NewProductPage = () => {

  return(
    <section className="flex flex-col w-full h-full overflow-auto bg-slate-50">
      <PageTitle title="Add Product" />

      <section className="flex flex-col w-full h-full p-5 justify-center items-center">
        <NewProductForm />
      </section>
    </section>
  );
};

export default NewProductPage;