import React from 'react'
import styled from 'styled-components'
import heroImage from '../images/heroImage.jpg'
import { AnchorButton } from '../components'

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`

const Heading = styled.h1`
  font-weight: 900;
  margin-bottom: 20px;
`

const Image = styled.img`
  max-height: 500px;
  max-width: 900px;
  object-fit: cover;
`

export const Home = () => (
  <PageContainer>
    <Heading>Welcome to the Show Catalog</Heading>
    <Image src={heroImage}></Image>
    <AnchorButton to="/shows" role="button">
      Search shows
    </AnchorButton>
  </PageContainer>
)
