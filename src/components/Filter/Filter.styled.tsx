import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 100px;
  text-align: center;
  border: 1px solid #1976d2;
  border-radius: 5px;
  text-decoration: none;
  color: #1976d2;
  font-size: 18px;

  &.active {
    color: white;
    background-color: #1976d2;
  }

  :not(:last-child) {
    margin-right: 8px;
  }
`;
