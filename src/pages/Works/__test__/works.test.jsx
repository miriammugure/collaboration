import { render, screen } from "@testing-library/react";

import Works from "../Works";
import { describe, it, expect } from "vitest";

describe("Works", () => {
  it("renders a heading element", () => {
    render(<Works />);
    const heading = screen.getByRole("heading", { name: "Work" });
    expect(heading).toBeInTheDocument();
  });

  it("renders an image element for each work", () => {
    render(<Works />);
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src");
    });
  });
  it("renders  title for each work", () => {
    render(<Works />);
    const headings = screen.getAllByRole("heading");
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });
  it("renders specific year for each work", () => {
    render(<Works />);
    const years = screen.getAllByRole("year");
    years.forEach((year) => {
      expect(year).toBeInTheDocument();
    });
  });
  it("renders a category for each work", () => {
    render(<Works />);
    const categories = screen.getAllByRole("category");
    categories.forEach((category) => {
      expect(category).toBeInTheDocument();
    });
  });
  it("it renders a description for each work", () => {
    render(<Works />);
    const descriptions = screen.getAllByRole("description");
    descriptions.forEach((description) => {
      expect(description).toBeInTheDocument();
    });
  });
});
