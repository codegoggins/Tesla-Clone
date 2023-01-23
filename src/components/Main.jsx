import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Container = styled.div`
   height: 100vh;
   width: 100%;
   /* background-image: url('../assets/model-y.jpg'); */
   background-image: ${props => `url(${props.bgImage})`};
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   gap:15rem;
`;

const Heading = styled.div`
   flex:3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
   font-size: 2.7rem;
   font-weight: 700;
   color:#202328;
`;

const Text = styled.p`
   font-weight:500;
   font-size: 1rem;
   letter-spacing: 0.4px;
   cursor: pointer;
   color:#202328;
`;

const Line = styled.span`
  height: 1.1px;
  background-color: black;
  width: 100%;

`;

const Buttons = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
`;

const Bottom = styled.div`
   flex:1;
   display:flex;
   flex-direction: column;
   align-items: center;
   gap:2rem;
`;

const ButtonLeft = styled.button`
    padding: 0.6rem 6rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    font-weight: 900;
    background-color: rgba(23,26,32,0.8);
    color: white;
    opacity:0.80;
    cursor: pointer;
`;

const ButtonRight = styled(ButtonLeft)`
   background-color: white;
   color: #202328;
   opacity:0.70;
`;

const DownArrow = styled.div`
   animation:bounce infinite 1s;
   color:white;
   cursor:pointer;
`;

const Main = (props) => {
  return (
    <Container bgImage={props.bgImg}>
    <Heading>
        <Title>{props.title}</Title>
        <Text>
         {props.text}
        </Text>
        <Line/>
    </Heading>
    <Bottom>
        <Buttons>
            <ButtonLeft>{props.leftBtnText}</ButtonLeft>
            <ButtonRight>{props.rightBtnText}</ButtonRight>
        </Buttons>
        <DownArrow>
            <KeyboardArrowDownOutlinedIcon fontSize='large'/>
        </DownArrow>
    </Bottom>
    </Container>
  )
}

export default Main
