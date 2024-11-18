import React from 'react'
import logo from '../assets/book.png'
import styled from 'styled-components'

const NavBar = () => {

const Nav = styled.div`
    height: 8rem;
    width: 100vw;
    background: black;
    display: flex;
    align-items: center;
    padding: 4rem;
    display: flex;
    justify-content: space-between;
  `

  const Logo = styled.img`
    width: 7rem;
    cursor: pointer;
  `

const Button = styled.button`
  width: 7rem;
  background: #700B97;
  padding: 5px;
  color: #ffffff;
  border: 2px solid #fff;
  border-radius: 20px;
  cursor: pointer;
`

  return (



    <Nav >
      {/* left-section for logo */}
      <div >
        <Logo
        src={logo} />
        
      </div>

      <div>
        <Button>Register</Button>
      </div>
    </Nav>
  )
}

export default NavBar