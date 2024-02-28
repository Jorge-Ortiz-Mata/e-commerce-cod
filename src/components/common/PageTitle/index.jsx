const PageTitle = ({ title }) => {

  return(
    <div className="flex items-center p-5 bg-white shadow border">
      <h1 className="font-bold text-xl text-cyan-700">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;