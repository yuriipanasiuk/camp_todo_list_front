import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 100px;
  text-align: center;
  border: 1px solid blue;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-size: 18px;

  &.active {
    color: yellow;
    background-color: blue;
  }

  :not(.active) {
    :hover {
      color: black;
    }
  }
  :not(:last-child) {
    margin-right: 8px;
  }
`;
