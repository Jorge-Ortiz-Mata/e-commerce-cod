import { render, screen } from "@testing-library/react";
import PageTitle from ".";

describe("PageTitle", () => {
  it("It should render the page title", () => {
    render(<PageTitle title="My Page" />);

    expect(screen.getByText("My Page")).toBeInTheDocument();
  });
});
