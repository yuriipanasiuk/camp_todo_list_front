import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100px;
  height: 29px;
  border: 1px solid #1976d2;
  background-color: transparent;
  color: #1976d2;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  :hover {
    background-color: #1976d2;
    color: white;
  }

  :not(:last-child) {
    margin-right: 8px;
  }
`;
