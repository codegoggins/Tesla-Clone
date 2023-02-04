import React, { useState } from 'react';
import styled from 'styled-components';
import {auth} from '../firebase'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../redux/userSlice'

const Container = styled.div`
   display:flex;
   margin:0 auto;
   width:21rem;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height:100vh;
   gap:1.5rem;
   padding-top: 3rem;
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

const Element = styled.div`
  display:flex;
  flex-direction: column;
`;

const Form = styled.form`
display: flex;
flex-direction:column;
gap: 1rem;
`;

const Register = () => {


const [fName,setFName] = useState("");
const [lName,setLName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleRegister = async(e) => {
   e.preventDefault();
   try{
      await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
        updateProfile(response.user,{
          displayName:fName,
        }).then(()=>{
          dispatch(
            login({
              email:response.user.email,
              uid:response.user.uid,
              displayName:fName
            })
          )
          navigate('/tesla')
        })
      })
   }catch(err){
    console.log(err);
   }
}

  return (
    <Container>
        <Title>Register</Title>
        <Form onSubmit={handleRegister}> 
        <Element>
        <Label>First Name</Label>
        <Input
         onChange={(e)=>setFName(e.target.value)}
         type='text'/>
        </Element>        
        <Element>
        <Label>Last Name</Label>
        <Input 
        onChange={(e)=>setLName(e.target.value)}
        type='text'/>
        </Element>
        <Element>
        <Label>Email</Label>
        <Input 
        onChange={(e)=>setEmail(e.target.value)}
        type='text'/>
        </Element>
        <Element>
        <Label>Password</Label>
        <Input 
         onChange={(e)=>setPassword(e.target.value)}
        type='password'/>
        </Element>
        <Button>Register</Button>
        </Form>
    </Container>
  )
}

export default Register