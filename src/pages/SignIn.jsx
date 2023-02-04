import React,{useState} from 'react';
import styled from 'styled-components';
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {login} from '../redux/userSlice'

const Container = styled.div`
   display:flex;
   margin:0 auto;
   width:21rem;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height:calc(100vh - 4rem);
   gap:2rem;
`;

const Title = styled.h1`
  font-size:2.5rem;
`;

const Input = styled.input`
  background-color: #f4f4f4;
  border:none;
  border-radius:0.3rem;
  height:2.8rem;
  width:21rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;

  &:focus{
    outline:none;
  }
  
`;

const Button = styled.button`
  display:inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3e6ae1;
  padding: 0.7rem 6rem;
  border-radius:0.3rem;
  border:none;
  cursor:pointer;
  width:100%;
  color:white;
  font-weight: bold;
  font-size:1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color:#707275;
`;

const RegBtn = styled(Button)`
  background-color:#f4f4f4;
  color:#707275;
  width:100%;
`;

const Mail = styled.div`
  display:flex;
  flex-direction: column;
`;

const Pass = styled(Mail)``;

const Form = styled.form`
display: flex;
flex-direction:column;
gap: 1rem;
`;

const SignIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();   

  const handleSignIn = async(e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth,email,password).then((response)=>{
          dispatch(
            login({
              email:response.user.email,
              uid:response.user.uid,
              displayName:response.user.displayName
            })
          )
          navigate('/tesla');
        })
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Container>
        <Title>Sign In</Title>
        <Form onSubmit={handleSignIn}>
        <Mail>
        <Label>Email</Label>
        <Input
        onChange={(e)=>setEmail(e.target.value)} 
        type='text'/>
        </Mail>
        <Pass>
        <Label>Password</Label>
        <Input 
        onChange={(e)=>setPassword(e.target.value)} 
        type='password'/>
        </Pass>
        <Button>Sign In</Button>
        </Form>
        <Link to='/register'>
        <RegBtn>Register</RegBtn>
        </Link>
    </Container>
  )
}

export default SignIn