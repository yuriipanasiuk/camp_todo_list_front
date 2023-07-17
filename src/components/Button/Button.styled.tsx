import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: orange;
  font-size: 24px;

  &.active {
    color: orange;
    text-decoration: underline;
  }

  :not(.active) {
    :hover {
      color: black;
    }
  }
  :not(:last-child) {
    margin-right: 12px;
  }
`;
