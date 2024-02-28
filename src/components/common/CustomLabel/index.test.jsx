import { render, screen } from "@testing-library/react";
import CustomLabel from ".";

describe("CustomLabel", () => {
  it("It should render the title", () => {
    render(<CustomLabel htmlFor="name" title="Name:" />);

    expect(screen.getByText("Name:")).toBeInTheDocument();
  });
});
