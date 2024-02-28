import { useState } from "react"

const CustomTextField = ({ id, name, value = "", onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(name, value);
  }

  return(
    <input 
      type="text"
      id={id}
      name={name}
      className="border rounded text-sm py-0.5 px-2 w-full"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default CustomTextField;