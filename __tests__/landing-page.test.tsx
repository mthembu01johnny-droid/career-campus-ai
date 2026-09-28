import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the landing page hero content', () => {
    render(<HomePage />);

    expect(screen.getByText(/build brighter futures/i)).toBeInTheDocument();
    expect(screen.getByText(/student success starts here/i)).toBeInTheDocument();
  });
});
