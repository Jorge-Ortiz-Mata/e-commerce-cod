import { useState } from "react";
import { useAtom } from "jotai";
import { productsAtom } from "../../../../store";
import CustomLabel from "../../CustomLabel";
import CustomTextField from "../../CustomTextField";
import CustomButton from "../../CustomButton";
import { productsFormSchema } from "../../../../validations/NewProduct";
import CustomErrorInput from "../../CustomErrorInput";

const NewProductForm = () => {
  const [params, setParams] = useState({name: "", price: 0, image: ""});
  const [errors, setErrors] = useState({});
  const [, setProducts] = useAtom(productsAtom);

  const handleOnChange = (name, value) => {
    setParams((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrors({})

    const formErrors = productsFormSchema(params);
    
    if(Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setProducts(prevState => {
        return [...prevState, params];
      });
    }
  }

  return(
    <form className="flex flex-col items-center justify-center border w-2/3 gap-5 p-5 rounded shadow bg-white">
      <h3 className="text-center text-cyan-700 font-semibold">New Product</h3>
      <div className="flex flex-col items-start w-full gap-1">
        <CustomLabel 
          title="Name:"
          htmlFor="name"
        />
        <CustomTextField 
          type="text"
          id="name"
          name="name"
          value={params.name}
          onChange={handleOnChange}
          hasError={"name" in errors}
        />
        { errors?.name && <CustomErrorInput name="The name" message={errors?.name} /> }
      </div>

      <div className="flex flex-col items-start w-full gap-1">
        <CustomLabel 
          title="Price:"
          htmlFor="price"
        />
        <CustomTextField 
          type="number"
          id="price"
          name="price"
          value={params.price}
          onChange={handleOnChange}
          hasError={"price" in errors}
        />
        { errors?.price && <CustomErrorInput name="The price" message={errors?.price} /> }
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