import React from 'react';
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  border-bottom: solid thick #6c6d5b;
  display: flex;
  justify-content: space-between;

  .logo{
    padding-top: 5px;
    color: #353439;
    font-size: 40px;

    @media(min-width: 768px){
      font-size: 45px;
    }
  }
`

function Navbar() {
  return(
    <Nav>
      <div className='logo'>
        Sabrina Sides
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;
