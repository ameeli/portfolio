import { render, screen } from "@testing-library/react";
import StarPath from "@/app/components/StarPath";

// helper to query SVG path
const getPath = () => screen.getByTestId("starpath-path");

describe("StarPath component", () => {
  it("renders an SVG with a path", () => {
    render(<StarPath />);
    expect(getPath()).toBeInTheDocument();
    expect(getPath()).toHaveAttribute("d"); // path 'd' attribute is set
  });

  it("renders the moving element", () => {
    render(<StarPath />);
    const moving = screen.getByTestId("starpath-moving");
    expect(moving).toBeInTheDocument();
    expect(moving.style.offsetPath).toBeDefined();
  });

  it("applies animation props", () => {
    render(<StarPath />);
    const moving = screen.getByTestId("starpath-moving");
    expect(moving).toHaveStyle({ position: "absolute" });
  });
});
