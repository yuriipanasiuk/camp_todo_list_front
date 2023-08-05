import styled from '@emotion/styled';
import { RxCross1 } from 'react-icons/rx';

export const Items = styled.li`
  display: flex;
  list-style: none;
`;

export const ModalWraper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const Icon = styled(RxCross1)`
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    color: #1976d2;
    scale: 1.2;
  }
`;
