import { IChildren } from '../../interface/todo.interface';
import { StyledContainer } from './FormWraper.styled';

const FormWraper = ({ children }: IChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default FormWraper;
