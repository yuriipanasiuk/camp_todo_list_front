import { IChildren } from '../../interface/todo.interface';
import { StyledContainer } from './Container.styled';

const Container = ({ children }: IChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
