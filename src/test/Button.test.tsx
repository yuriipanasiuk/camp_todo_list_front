import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../components/Button';

describe('Button component', () => {
  it('renders button with default props', () => {
    render(<Button children="Click me" />);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ width: '100px' });
  });

  it('renders button with custom width', () => {
    render(<Button children="Click me" width={200} />);

    const buttonElement = screen.getByText(/click me/i);

    expect(buttonElement).toHaveStyle({ width: '200px' });
  });

  it('calls onClick handler when clicked', async () => {
    const onClickMock = jest.fn();
    render(<Button children="Click me" onClick={onClickMock} />);

    const buttonElement = screen.getByText(/click me/i);

    await userEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
