import { render, screen } from "@testing-library/react";
import Welcome from "@/app/components/Welcome";

describe("Welcome component", () => {
  it("renders the main header", () => {
    render(<Welcome />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hallo! I'm Amee."
    );
  });

  it("renders the subheader", () => {
    render(<Welcome />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Welcome to my playground of learning and exploration."
    );
  });
});
