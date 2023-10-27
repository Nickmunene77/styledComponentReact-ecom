import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 4rem;
  padding: 0.2rem;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '2rem'};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  width: ${(props) => (props.width ? props.width : '15rem')};
  transition: background-color 0.3s, color 0.3s;
  color: ${(props) =>
    props.hovered ? 'white' : props.textColor ? props.textColor : 'black'};
  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : 'black'};
    color: white;
  }
`

const Text = styled.span``

const CustomButton = ({
  text,
  backgroundColor,
  textColor,
  borderRadius,
  width,
  hoverBackgroundColor,
}) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      hoverBackgroundColor={hoverBackgroundColor}
      textColor={textColor}
    >
      <Text>{text}</Text>
    </Button>
  )
}

export default CustomButton
