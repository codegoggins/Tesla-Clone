import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectUser,logout} from '../redux/userSlice'
import d1 from '../assets/dash1.jfif'
import d2 from '../assets/dash2.png'
import d3 from '../assets/dash3.jfif'
import { useNavigate } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'

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
 align-items:center;

  @media(max-width:768px){
    justify-content: center;
  }
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

const SignOut = styled.div`
  display: flex;
  align-items: start;
  gap: 0.3rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const Icon = styled.div`
margin-top:0.4rem
`;

const Account = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try{
      await signOut(auth).then(()=>{
        dispatch(logout());
        navigate('/');
      })
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Container>
        {
          <Title>
          {user?.displayName + "'s Dashboard"}
          </Title>
        }
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
      <SignOut onClick={handleLogout}>
      <Icon>
         <ExitToAppIcon fontSize='large'/>
      </Icon>
      <p>
      Sign Out
      </p>
      </SignOut>
    </Container>
  )
}

export default Account