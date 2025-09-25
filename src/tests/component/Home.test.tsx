import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText(/Hallo! I'm Amee/i)).toBeInTheDocument();
  });

  it("contains both sections", () => {
    render(<Home />);
    const sections = screen.getAllByRole("region");
    expect(sections.length).toBe(2);
  });
});
