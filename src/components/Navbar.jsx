import React, { useState } from 'react'
import styled from 'styled-components'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// Logo
import Logo from '../assets/logo.svg' 


const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem 2rem;
   height: 4rem;
   background:transparent;
   position: fixed;
   top: 0;
   z-index: 30;
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
   gap: 0.3rem;

   @media (max-width: 1024px) {
      display:none;
   }
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
    background-color: #f2f2f2;
    border-radius: 0.5rem;
  }
`
// RESPONSIVE NAVBAR

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right:0;
  height: 100vh;
  width:18rem;
  background-color: white;
  overflow-y: scroll;
  z-index: 10;
  transform: ${(props)=>props.isToggle ? 'translateX(0)' :'translateX(100%)' };
  transition: all 0.3s ease;
  ::-webkit-scrollbar{
   display: none;
  }
`

const SideMenuList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.4rem;
   padding: 7rem 1rem;
`;

const SideItem= styled.li`
  font-weight: 600;
  color:#707275;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  padding: 0.4rem 0;
  padding-left: 0.3rem;
  &:hover{
    background-color: #dce8ee;
    border-radius: 0.5rem;
  }
`
const CloseBtn = styled.div`
  position: absolute;
  top:1rem;
  right: 2rem;
  cursor: pointer;
  color: #707275;
`;

const Shop=styled.div`
display:flex;
margin-right: -1rem;

@media (max-width: 768px) {
      display:none;
}

`;
const Menu=styled.div``;


const Navbar = () => {


   const [toggle,setToggle] = useState(false);

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
               <Shop>
                <Item>Shop</Item>
                <Item>Account</Item>
               </Shop>
               <Menu>
                <Item onClick={()=>setToggle(!toggle)} style={{}}>Menu</Item>
               </Menu>
             </Right>
             <SideMenu isToggle={toggle}>
             <CloseBtn onClick={()=>setToggle(!toggle)}>
                 <CloseOutlinedIcon fontSize='large'/>
             </CloseBtn>
                 <SideMenuList>
                     <SideItem>Model S</SideItem>
                     <SideItem>Model 3</SideItem>
                     <SideItem>Model X</SideItem>
                     <SideItem>Model Y</SideItem>
                     <SideItem>Solar Roof</SideItem>
                     <SideItem>Solar Panels</SideItem>
                     <SideItem>Existing Inventory</SideItem>
                     <SideItem>Used Inventory</SideItem>
                     <SideItem>Trade-In</SideItem>
                     <SideItem>Demo Drive</SideItem>
                     <SideItem>Insurance</SideItem>
                     <SideItem>Cybertruck</SideItem>
                     <SideItem>Roadster</SideItem>
                     <SideItem>Semi</SideItem>
                     <SideItem>Charging</SideItem>
                     <SideItem>Commercial Energy</SideItem>
                     <SideItem>Utilities</SideItem>
                     <SideItem>Charging</SideItem>
                     <SideItem>Find Us</SideItem>
                     <SideItem>Support</SideItem>
                     <SideItem>Investor Relations</SideItem>
                     <SideItem>Shop</SideItem>
                     <SideItem>Account</SideItem>
                 </SideMenuList>
             </SideMenu>
    </Container>
  )
}

export default Navbar