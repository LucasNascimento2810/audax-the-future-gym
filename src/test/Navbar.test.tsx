import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {component}
    </MemoryRouter>,
  );
};

describe("Navbar", () => {
  it("renders the brand logo", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByAltText(/logo da audax gym/i)).toBeInTheDocument();
  });

  it("renders the updated navigation links", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText(/^Início$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Sobre$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Estrutura$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Planos$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Horários$/i)).toBeInTheDocument();
    expect(screen.getByText(/^FAQ$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Contato$/i)).toBeInTheDocument();
  });
});
