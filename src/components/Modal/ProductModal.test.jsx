import { render, screen } from "@testing-library/react";
import ProductModal from "./ProductModal";

describe("ProductModal", () => {
  it("It should render the modal title", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("Product Information")).toBeInTheDocument();
  });

  it("It should render the close button", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("It should render the add button", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("It should render the product name", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("Laptop")).toBeInTheDocument();
  });

  it("It should render the product price", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("$ 4 USD")).toBeInTheDocument();
  });

  it("It should render the product description", () => {
    const product = { name: "Laptop", price: 4, image: "" }
    
    render(<ProductModal product={product} showModal={true} onCloseModal={jest.fn} />)
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repellendus magnam, atque vero illo nam vitae officia nostrum, optio iure, repellat beatae blanditiis quisquam eaque inventore debitis magni excepturi necessitatibus!")).toBeInTheDocument();
  });
});
