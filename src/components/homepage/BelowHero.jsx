import React from 'react'
import CustomHeader from '../custom/CustomHeader'
import styled from 'styled-components'

const Header1 = styled.div`
  margin: 2rem;
`

const Section = styled.section`
  margin: 4rem 0;
`

const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ItemContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  text-align: center;
  min-width: 200px;
  align-items: center;
`

const Images = styled.img`
  height: 20rem;
  width: 16rem;
  border-radius: 20px;
`

const SliderTitle = styled.h1`
  font-size: 2rem;
`

const SliderDesc = styled.p`
  padding: 3px 5px;
  background-color: antiquewhite;
  border-radius: 3px;
  width: 10rem;
  margin-left: 20%;
`

const BelowHero = () => {
  const items = [
    {
      image: 'assets/Images/d1.jpg',
      title: 'Dresses',
      description: 'See more',
    },
    {
      image: 'assets/Images/t1.jpg',
      title: 'Men Trouser',
      description: 'See more',
    },
    {
      image: 'assets/Images/tsh1.jpg',
      title: 'Men T-shirt',
      description: 'See more ',
    },
    {
      image: 'assets/Images/jersy.jpg',
      title: 'Football Jersy',
      description: 'See more',
    },
    {
      image: 'assets/Images/shm1.jpg',
      title: 'Men-shoes',
      description: 'See more',
    },
    {
      image: 'assets/Images/flat1.jpg',
      title: 'Sandals',
      description: 'See more',
    },
  ]

  return (
    <Section>
      <Header1>
        <CustomHeader
          title={'Buy Quality to Show-Off'}
          decription={'The best selling Ecommerce store'}
        />
      </Header1>
      <HorizontalScrollContainer>
        {items.map((item, index) => (
          <ItemContainer key={index}>
            <Images src={item.image} />
            <SliderTitle>{item.title}</SliderTitle>
            <SliderDesc>{item.description}</SliderDesc>
          </ItemContainer>
        ))}
      </HorizontalScrollContainer>
    </Section>
  )
}

export default BelowHero
