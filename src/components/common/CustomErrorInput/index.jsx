
const CustomErrorInput = ({ name, message }) => {

  return(
    <span className="text-red-500 italic text-xs font-semibold">{name} {message}</span>
  );
};

export default CustomErrorInput;