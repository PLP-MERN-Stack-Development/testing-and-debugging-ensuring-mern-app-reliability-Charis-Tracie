import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../components/LoginForm';

describe('LoginForm Component', () => {
  it('submits form with username and password', () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pass123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
