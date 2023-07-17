import { StyledLink } from './Filter.styled';

const navItems = [
  { href: 'all', text: 'All' },
  { href: 'active', text: 'Active' },
  { href: 'completed', text: 'Completed' },
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
