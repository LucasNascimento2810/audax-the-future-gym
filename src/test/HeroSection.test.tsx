import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection";

describe("HeroSection", () => {
  it("renders the main title", () => {
    render(<HeroSection />);
    expect(screen.getByText("AUDAX")).toBeInTheDocument();
    expect(screen.getByText("GYM")).toBeInTheDocument();
  });

  it("renders the updated hero copy", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Conheca a Academia Audax, veja a estrutura/i),
    ).toBeInTheDocument();
  });

  it("renders the main CTA buttons", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /falar no whatsapp/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver planos/i })).toBeInTheDocument();
  });
});
