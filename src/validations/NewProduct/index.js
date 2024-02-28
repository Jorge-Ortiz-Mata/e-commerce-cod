export const productsFormSchema = (params) => {
  const errors = {};

  if(params?.name.length <= 0) {
    Object.assign(errors, { name: "can't be blank" });
  }

  if(params?.price.length <= 0) {
    Object.assign(errors, { price: "can't be blank" });
  } else if (params?.price <= 0) {
    Object.assign(errors, { price: "must be greater than 0" });
  }

  return errors;
}