import { render, screen } from '@testing-library/react';
import SignInForm from '@/components/auth/SignInForm';

describe('SignInForm', () => {
  it('renders credentials fields and submit action', () => {
    render(<SignInForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});
