import React, { useState } from 'react';
import RightNav from './RightNav';
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  background-color: ${({ open }) => (open ? '#c28e76' : '#faf6f3')};
  display: none;

  @media (max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#353439')};
    border-radius: 10px;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleNavbarClick = () => {
      setOpen(!open)
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} handleNavbarClick={handleNavbarClick}/>
    </>
  );
}

export default Burger;
