import { useState } from "react"

const CustomTextField = ({ type, id, name, value = "", onChange, hasError }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(name, value);
  }

  return(
    <input 
      type={type}
      id={id}
      name={name}
      className={`border border-gray-200 font-semibold text-gray-500 px-2 py-1 rounded text-xs w-full ${ hasError ? "border-red-500" : "" }`}
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default CustomTextField;