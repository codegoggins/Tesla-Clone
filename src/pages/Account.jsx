import React from 'react'
import styled from 'styled-components'
import d1 from '../assets/dash1.jfif'
import d2 from '../assets/dash2.png'
import d3 from '../assets/dash3.jfif'


const Container = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
padding:5rem 2rem;
`;
const CardContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 2rem;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  height: 16rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  overflow: hidden;
`
const CardImg = styled.img`
width: full;
height: auto;
object-fit: cover;
`;
const CardContent = styled.div`
 display: flex;
 flex-direction: column;
 padding: 0 1rem;
 gap: 0.2rem;
`;
const CardTitle = styled.p`
 font-size: 1rem;
 color: gray;
 font-weight: bold;
`;
const CardText = styled.p`
 font-size: 0.9rem;
 font-weight: 500;
`;
const CardBtn = styled.span`
 text-decoration: underline;
 color: gray;
 cursor: pointer;
`;


const Account = () => {
  return (
    <Container>
        <Title>Nilay's Dashboard</Title>
        <CardContainer>
            <Card>
               <CardImg src={d1}/>
               <CardContent>
                 <CardTitle>Order Tesla Solar</CardTitle>
                 <CardText>Produce energy to power your Tesla life</CardText>
                 <CardBtn>View Solar</CardBtn>
               </CardContent>
            </Card>
            <Card>
               <CardImg src={d2}/>
               <CardContent>
                 <CardTitle>Reserve a Car</CardTitle>
                 <CardText>Browse our models</CardText>
                 <CardBtn>Shop Now</CardBtn>
               </CardContent>
            </Card>
            <Card>
               <CardImg src={d3}/>
               <CardContent>
                 <CardText>Purchased a car from a third party?</CardText>
                 <CardBtn>Add</CardBtn>
               </CardContent>
            </Card>
        </CardContainer>

    </Container>
  )
}

export default Account