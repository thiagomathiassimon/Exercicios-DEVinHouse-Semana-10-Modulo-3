import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

const renderComponent = () => render(<NavBar />);

describe("NavBar Component", () => {
  it("Should render Book Store in the NavBar Component", () => {
    renderComponent();

    expect(screen.getByText("Book Store")).toBeInTheDocument;
  });
});
