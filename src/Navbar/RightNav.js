import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  background-color: #faf6f3;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c28e76;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 125px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    border-left: dashed thin #6c6d5b;

    li {
      background-color: #c28e76;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
    color: #cd5c5c;
    background-color: #faf6f3;

    @media(max-width: 768px){
        color: black;
        background-color: #c28e76;
    }
`

const RightNav = ({ open, handleNavbarClick }) => {
  return (
    <Ul open={open} onClick={() => handleNavbarClick()}>
      <li>
        <StyledLink to='/'>Home</StyledLink>
      </li>
      <li>
        <StyledLink to='/about'>About</StyledLink>
      </li>
      <li>
        <StyledLink to='/projects'>Projects</StyledLink>
      </li>
      <li>
        <StyledLink to='/contact'>Contact</StyledLink>
      </li>
    </Ul>
  );
};

export default RightNav;
