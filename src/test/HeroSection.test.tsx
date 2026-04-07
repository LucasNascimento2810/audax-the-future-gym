import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';

describe('HeroSection', () => {
  it('renders the main title', () => {
    render(<HeroSection />);
    expect(screen.getByText('AUDAX')).toBeInTheDocument();
    expect(screen.getByText('GYM')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroSection />);
    expect(screen.getByText('Supere seus limites. Treine com estrutura de alto padrão e acompanhamento profissional.')).toBeInTheDocument();
  });

  it('renders the location badge', () => {
    render(<HeroSection />);
    expect(screen.getByText('Cascavel — PR')).toBeInTheDocument();
  });
});