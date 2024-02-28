import { render, screen } from "@testing-library/react";
import CustomErrorInput from ".";

describe("CustomErrorInput", () => {
  it("It should render the error message", () => {
    render(<CustomErrorInput name="The name" message="can't be blank" />);

    expect(screen.getByText("The name can't be blank")).toBeInTheDocument();
  });
});
