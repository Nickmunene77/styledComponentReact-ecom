import React from 'react'
import styled from 'styled-components'
import CustomButton from '../custom/CustomButton'
import { Person } from '@material-ui/icons'

const Container = styled.div`
  background-color: aliceblue;

  position: fixed; /* Set the position to fixed */
  top: 0; /* Stick to the top of the viewport */
  left: 0; /* Stick to the left of the viewport */
  right: 0; /* Stretch to the right of the viewport */
  z-index: 999; /* Set a high z-index to keep it above other content */
`

const Container1 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 4rem;
`

const Logo = styled.text`
  font-size: 20px;
  font-weight: bold;
`

const LastDiv = styled.div`
  display: flex;
  gap: 2rem;
`

const PersonDiv = styled.div`
  padding: 1rem;
  background-color: yellowgreen;
  border-radius: 50%;
  &:hover {
    background-color: grey;
  }
`

const Header = () => {
  return (
    <Container>
      <Container1>
        <Logo>Mr Lee Shop</Logo>
        <LastDiv>
          <CustomButton text={'Buy'} />
          <PersonDiv>
            <Person style={{ fontSize: '2rem' }} />
          </PersonDiv>
        </LastDiv>
      </Container1>
    </Container>
  )
}

export default Header
