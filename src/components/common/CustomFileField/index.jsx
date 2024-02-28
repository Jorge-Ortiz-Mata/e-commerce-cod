const CustomFileField = ({ id, name, onChange, hasError }) => {

  const handleOnChange = (e) => {
    onChange(name, URL.createObjectURL(e.target.files[0]));
  }

  return(
    <input 
      type="file"
      id={id}
      name={name}
      className={`border border-gray-200 font-semibold text-gray-500 px-2 py-1 rounded text-xs w-full ${ hasError ? "border-red-500" : "" }`}
      onChange={handleOnChange}
    />
  );
};

export default CustomFileField;