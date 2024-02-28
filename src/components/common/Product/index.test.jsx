import { render, screen } from "@testing-library/react";
import Product from ".";

describe("Product", () => {
  it("It should render the product name", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<Product product={product} />)
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  it("It should render the product price", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<Product product={product} />)
    expect(screen.getByText("$ 4 USD")).toBeInTheDocument();
  });

  it("It should render the add button", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<Product product={product} />)
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("It should render the see more button", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<Product product={product} />)
    expect(screen.getByText("See more")).toBeInTheDocument();
  });

  it("It should render the description", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<Product product={product} />)
    expect(screen.getByText("Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed illo voluptatem quasi cumque saepe soluta")).toBeInTheDocument();
  });
});
