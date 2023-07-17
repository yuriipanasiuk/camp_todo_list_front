import { StyledLink } from '../FilterButton/FilterButton.styled';

const navItems = [
  { href: 'all', text: 'All Todos' },
  { href: 'active', text: 'Active Todos' },
  { href: 'completed', text: 'Completed Todos' },
];

const Filter = () => {
  return (
    <>
      {navItems.map(({ href, text }) => (
        <StyledLink key={href} to={href}>
          {text}
        </StyledLink>
      ))}
    </>
  );
};

export default Filter;
