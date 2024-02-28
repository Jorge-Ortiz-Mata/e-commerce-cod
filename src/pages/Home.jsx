import PageTitle from "../components/common/PageTitle";

const HomePage = () => {

  return(
    <section className="flex flex-col w-full h-full overflow-auto bg-slate-50">
      <PageTitle title="Home" />

      <section className="flex flex-col w-full h-full p-5">
        <div className="flex flex-col w-full h-full p-5 bg-white rounded shadow border items-center justify-center gap-5">
          <h2 className="text-xl font-bold text-cyan-700 text-center">E-commerce Web App</h2>
          <p className="text-sm text-cyan-700 text-center">
            Build a simple e-commerce application with four screens: a product entry
            form, a product display screen with search and sorting options, a product <br />
            details screen, and a shopping cart screen. Use React.js for the frontend.
            The backend is not required for this testM
          </p>
          <p className="text-sm text-cyan-700 text-center font-semibold">
            Jorge Ortiz @ yorch-devs.com
          </p>
        </div>
      </section>
    </section>
  );
};

export default HomePage;