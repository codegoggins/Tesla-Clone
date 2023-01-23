import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 4rem;
  background-color:#171a20;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  `;

const Text = styled.span`
  font-weight: 400;
  color:white;
  font-size: 1rem;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
        <Text>Tesla-Clone 2023</Text>
        <Text>©codegoggins</Text>
        <Text>Github</Text>
    </Container>
  )
}

export default Footer