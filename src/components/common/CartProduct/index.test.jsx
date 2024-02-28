import { render, screen } from "@testing-library/react";
import CartProduct from ".";

describe("CartProduct", () => {
  it("It should render the product name", () => {
    const product = { name: "Laptop", price: 4, quantity: 2 }
    
    render(<CartProduct product={product} />)
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  it("It should render the product price", () => {
    const product = { name: "Laptop", price: 4, quantity: 2 }
    
    render(<CartProduct product={product} />)
    expect(screen.getByText("4 USD")).toBeInTheDocument();
  });

  it("It should render the total product price", () => {
    const product = { name: "Laptop", price: 4, quantity: 2 }
    
    render(<CartProduct product={product} />)
    expect(screen.getByText("8 USD")).toBeInTheDocument();
  });

  it("It should render the product quantity", () => {
    const product = { name: "Laptop", price: 4, quantity: 2 }
    
    render(<CartProduct product={product} />)
    expect(screen.getByText("2 pz.")).toBeInTheDocument();
  });
});
