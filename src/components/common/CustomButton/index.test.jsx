import { render, screen } from "@testing-library/react";
import CustomButton from ".";

describe("CustomButton", () => {
  it("It should render the page title", () => {
    render(<CustomButton title="Save" onClick={jest.fn} />);

    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
