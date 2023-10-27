import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`
const Title = styled.h1`
  font-size: 4rem;

  font-family: cursive;
`
const Desc = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
`

const CustomHeader = ({ title, decription }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Desc>{decription}</Desc>
    </Container>
  )
}

export default CustomHeader
