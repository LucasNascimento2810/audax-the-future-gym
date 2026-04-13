import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection";

describe("HeroSection", () => {
  it("renders the brand and main headline", () => {
    render(<HeroSection />);
    expect(
      screen.getByText((_, element) => element?.textContent?.trim() === "AUDAX GYM"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /a academia em cascavel para quem quer estrutura, constância e resultado/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the updated hero copy", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/Na Audax, você encontra ambiente moderno, atendimento próximo/i),
    ).toBeInTheDocument();
  });

  it("renders the main CTA buttons", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("link", { name: /agendar uma visita/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /conhecer os planos/i }),
    ).toBeInTheDocument();
  });
});
