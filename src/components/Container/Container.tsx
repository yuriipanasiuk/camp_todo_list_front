import { IChildren } from '../../interface/todo.interface';
import { StyledContainer } from './Container.styled';

const Container: React.FC<IChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
