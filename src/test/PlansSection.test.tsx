import { render, screen } from '@testing-library/react';
import PlansSection from '../components/PlansSection';

describe('PlansSection', () => {
  it('renders the section title', () => {
    render(<PlansSection />);
    expect(screen.getByRole('heading', { name: /conheça nossos planos/i })).toBeInTheDocument();
  });

  it('renders plan names', () => {
    render(<PlansSection />);
    expect(screen.getByText('MENSAL')).toBeInTheDocument();
    expect(screen.getByText('TRIMESTRAL')).toBeInTheDocument();
    expect(screen.getByText('SEMESTRAL')).toBeInTheDocument();
    expect(screen.getByText('ANUAL')).toBeInTheDocument();
  });

  it('renders prices', () => {
    render(<PlansSection />);
    expect(screen.getByText('189')).toBeInTheDocument();
    expect(screen.getByText('169')).toBeInTheDocument();
    expect(screen.getByText('149')).toBeInTheDocument();
    expect(screen.getByText('129')).toBeInTheDocument();
  });
});
