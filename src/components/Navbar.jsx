import React from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

// Logo
import Logo from '../assets/logo.svg' 


const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem 2rem;
   height: 4rem;
   background:transparent;
`;

const Left = styled.img`
   height: 1rem;
   width: 6rem;
   object-fit: cover;
`;
const Center = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
`;

const Right = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.2rem;
`;

const Item= styled.li`
  font-weight: 600;
  color:#202328;
  padding: 0.25rem 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover{
    background-color: #dce8ee;
    border-radius: 0.5rem;
  }
`

const Menu = styled.div`
      display: flex;
      align-items:center;
      justify-content: center;
      cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
             <Left src={Logo}/>
             <Center>
                <Item>Model S</Item>
                <Item>Model 3</Item>
                <Item>Model X</Item>
                <Item>Model Y</Item>
                <Item>Solar Roof</Item>
                <Item>Solar Panels</Item>
             </Center>
             <Right>
                <Item>Shop</Item>
                <Item>Account</Item>
                <Item>Menu</Item>
             </Right>
             <Menu>
                <MenuOutlinedIcon/>
             </Menu>
    </Container>
  )
}

export default Navbar