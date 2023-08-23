import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledLink } from './Filter.styled';
import { ButtonType } from '../../type/todo.type';

const Filter = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>(ButtonType.All);
  const [, setSearchParams] = useSearchParams();

  const getQuery = (data: string) => {
    setSearchParams(data !== '' ? { type: data } : {});
  };

  const handleClick = (buttonType: ButtonType) => {
    setActiveButton(buttonType);
    getQuery(buttonType);
  };

  const handleAllClick = () => handleClick(ButtonType.All);
  const handlePrivateClick = () => handleClick(ButtonType.Private);
  const handlePublicClick = () => handleClick(ButtonType.Public);
  const handleCompletedClick = () => handleClick(ButtonType.Completed);

  return (
    <>
      <StyledLink type="button" active={activeButton === 'all'} onClick={handleAllClick}>
        All
      </StyledLink>
      <StyledLink type="button" active={activeButton === 'isPrivate'} onClick={handlePrivateClick}>
        Private
      </StyledLink>

      <StyledLink type="button" active={activeButton === 'public'} onClick={handlePublicClick}>
        Public
      </StyledLink>
      <StyledLink type="button" active={activeButton === 'complete'} onClick={handleCompletedClick}>
        Completed
      </StyledLink>
    </>
  );
};

export default Filter;
