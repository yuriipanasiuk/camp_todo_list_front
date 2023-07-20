import { IButton } from '../../interface/todo.interface';
import { StyledButton } from './Button.styled';

const Button = ({ children, type = 'button', onClick }: IButton) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
