import { IButton } from '../../interface/todo.interface';
import { StyledButton } from './Button.styled';

const Button = ({ children, type = 'button', onClick, width = 100 }: IButton) => {
  return (
    <StyledButton type={type} onClick={onClick} width={width}>
      {children}
    </StyledButton>
  );
};

export default Button;
