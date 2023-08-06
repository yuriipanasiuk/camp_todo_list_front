import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { searchTodo } from '../../redux/todo/todoOperations';
import { Input, SearchIcon, Form } from './SearchField.styled';

const SearchField = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const hadleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.value;
    setValue(searchValue);
    dispatch(searchTodo(searchValue));
  };

  return (
    <Form>
      <SearchIcon size={24} />
      <Input type="text" value={value} onChange={hadleSearch} />
    </Form>
  );
};

export default SearchField;
