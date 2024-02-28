import { useState } from "react";
import { useAtom } from "jotai";
import { productsAtom } from "../../../../store";
import CustomLabel from "../../CustomLabel";
import CustomTextField from "../../CustomTextField";
import CustomButton from "../../CustomButton";
import { productsFormSchema } from "../../../../validations/NewProduct";
import CustomErrorInput from "../../CustomErrorInput";
import CustomFileField from "../../CustomFileField";

const NewProductForm = () => {
  const [isFinished, setIsFinished] = useState(false); 
  const [params, setParams] = useState({name: "", price: 0, image: ""});
  const [errors, setErrors] = useState({});
  const [, setProducts] = useAtom(productsAtom);

  const handleOnChange = (name, value) => {
    setParams((prevState) => {
      return { ...prevState, [name]: value }
    });
  };

  const resetForm = () => {
    setIsFinished(false);
    setParams({name: "", price: 0, image: ""});
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
      setIsFinished(true);
    }
  }

  if(isFinished) {
    return (
      <div className="flex flex-col items-center justify-center border w-2/3 gap-5 p-5 rounded shadow bg-white">
        <h3 className="font-semibold text-center text-cyan-700">Product was created successfully!</h3>
        <div className="flex flex-col w-full items-center justify-center gap-3">
          <p className="text-sm text-gray-500">
            Your new product has been created successfully.
          </p>
          <button onClick={resetForm} className="text-white bg-green-500 text-sm rounded px-2 py-1">
            Create new product
          </button>
        </div>
      </div>
    )
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
        <CustomLabel 
          title="Image:"
          htmlFor="image"
        />
        <CustomFileField 
          id="image"
          name="image"
          onChange={handleOnChange}
          hasError={"image" in errors}
        />
        { errors?.image && <CustomErrorInput name="The image" message={errors?.image} /> }
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