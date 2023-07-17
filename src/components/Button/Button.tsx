import { IButton } from '../../interface/todo.interface';

const Button = ({ children, type = 'button' }: IButton) => {
  return <button type={type}>{children}</button>;
};

export default Button;
