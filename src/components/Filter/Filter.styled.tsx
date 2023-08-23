import styled from '@emotion/styled';
import { IStyleFilterProp } from '../../interface/todo.interface';

export const StyledLink = styled.button<IStyleFilterProp>`
  display: inline-block;
  width: 120px;
  height: 30px;
  text-align: center;
  border: 1px solid #1976d2;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  color: ${p => (p.active ? 'white' : '#1976d2')};
  background-color: ${p => (p.active ? '#1976d2' : 'white')};
  cursor: pointer;

  :not(:last-child) {
    margin-right: 8px;
  }
`;
