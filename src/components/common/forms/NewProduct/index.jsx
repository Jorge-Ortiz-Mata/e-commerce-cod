import { useState } from "react";
import CustomLabel from "../../CustomLabel";
import CustomTextField from "../../CustomTextField";
import CustomButton from "../../CustomButton";

const NewProductForm = () => {
  const [params, setParams] = useState({name: "", price: 0, image: ""});

  const handleOnChange = (name, value) => {
    setParams((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    console.log(params)
  }

  return(
    <form className="flex flex-col items-center justify-center border w-2/3 gap-5 p-5 rounded shadow bg-white">
      <div className="flex flex-col items-start w-full gap-1">
        <CustomLabel 
          title="Name:"
          htmlFor="name"
        />
        <CustomTextField 
          id="name"
          name="name"
          value={params.name}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col items-start w-full gap-1">
        <CustomButton 
          title="Save"
          onClick={handleOnSubmit}
        />
      </div>
    </form>
  );
};

export default NewProductForm;