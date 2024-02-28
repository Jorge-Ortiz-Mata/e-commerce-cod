const CustomButton = ({ title, onClick }) => {

  return(
    <button
      className="bg-cyan-700 py-1 text-white font-semibold w-full text-sm rounded"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;