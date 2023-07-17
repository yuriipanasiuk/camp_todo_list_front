import { IFilter } from '../../interface/todo.interface';
import { StyledLink } from './FilterButton.styled';

const FilterButton = ({ children }: IFilter) => {
  return <StyledLink to={}>{children}</StyledLink>;
};

export default FilterButton;
