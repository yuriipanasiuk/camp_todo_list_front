import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import { useAppDispatch } from '../../hooks/redux.hooks';
import {
  deleteTodo,
  getOneTodo,
  clearOneTodo,
  completeTodo,
} from '../../redux/todo/todoOperations';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { ITodo, ITodoProps } from '../../interface/todo.interface';
import { useCustomSelector } from '../../redux/selectors';

import {
  Items,
  ModalWraper,
  Title,
  Icon,
  TitleText,
  DescriptionText,
  DescriptionModalText,
  TitleModalText,
  CompleteText,
} from './TodoItems.styled';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const TodoItem = ({ items }: ITodoProps) => {
  const dispatch = useAppDispatch();
  const { oneTodo, searchValue } = useCustomSelector();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const todo = oneTodo as ITodo;

  const handleDelete = (id: string) => {
    void dispatch(deleteTodo(id));
    dispatch(clearOneTodo());
  };

  const handleView = (id: string) => {
    void dispatch(getOneTodo(id));
    setIsModalOpen(prevState => !prevState);
  };

  const handleCloseModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const isComplete = e.target.checked;
    void dispatch(completeTodo({ id, isComplete }));
  };

  const visibeTodos = items.filter(
    item =>
      item.title.toLowerCase().includes((searchValue || '').toLowerCase()) ||
      item.description.toLowerCase().includes((searchValue || '').toLowerCase())
  );

  return (
    <>
      {visibeTodos.map(({ _id, title, description, isComplete }) => (
        <Items key={_id}>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
          <Button children="View" onClick={() => handleView(_id)} />
          <Button children="Delete" onClick={() => handleDelete(_id)} />
          <Switch
            {...label}
            checked={isComplete}
            onChange={e => {
              handleChange(_id, e);
            }}
          />

          {isModalOpen && (
            <Modal onClick={handleCloseModal}>
              <ModalWraper>
                <Icon onClick={handleCloseModal} />
                <Title>Todo modal</Title>
                <TitleModalText>
                  <b>Title:</b> {todo.title}
                </TitleModalText>
                <DescriptionModalText>
                  <b>Description:</b>
                  {todo.description}
                </DescriptionModalText>
                <Stack
                  spacing={1}
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Button children="Delete" onClick={() => handleDelete(todo._id)} />
                  <CompleteText>
                    <b>Complete todo:</b>
                  </CompleteText>
                  <Switch
                    {...label}
                    checked={Boolean(todo.isComplete)}
                    onChange={e => {
                      handleChange(todo._id, e);
                    }}
                  />
                </Stack>
              </ModalWraper>
            </Modal>
          )}
        </Items>
      ))}
    </>
  );
};

export default TodoItem;
