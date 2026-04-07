import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar', () => {
  it('renders the brand logo', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByAltText('Audax Gym')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('INÍCIO')).toBeInTheDocument();
    expect(screen.getByText('SOBRE')).toBeInTheDocument();
    expect(screen.getByText('ESTRUTURA')).toBeInTheDocument();
    expect(screen.getByText('PLANOS')).toBeInTheDocument();
    expect(screen.getByText('HORÁRIOS')).toBeInTheDocument();
    expect(screen.getByText('CONTATO')).toBeInTheDocument();
  });
});