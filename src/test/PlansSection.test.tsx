import { render, screen } from "@testing-library/react";
import PlansSection from "../components/PlansSection";

describe("PlansSection", () => {
  it("renders the section title", () => {
    render(<PlansSection />);
    expect(
      screen.getByRole("heading", { name: /escolha o plano ideal para a sua rotina/i }),
    ).toBeInTheDocument();
  });

  it("renders the featured plan badge", () => {
    render(<PlansSection />);
    expect(screen.getByText(/mais vantajoso/i)).toBeInTheDocument();
  });

  it("renders the plan names", () => {
    render(<PlansSection />);
    expect(screen.getByText("MENSAL")).toBeInTheDocument();
    expect(screen.getByText("TRIMESTRAL")).toBeInTheDocument();
    expect(screen.getByText("SEMESTRAL")).toBeInTheDocument();
    expect(screen.getByText("ANUAL")).toBeInTheDocument();
  });

  it("renders a WhatsApp CTA for each plan", () => {
    render(<PlansSection />);
    expect(screen.getAllByRole("link", { name: /quero este plano/i })).toHaveLength(4);
  });
});
