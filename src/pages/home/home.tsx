import React from 'react'
import heroImage from '../../images/heroImage.jpg'
import { AnchorButton } from '../../components'
import { PageContainer, Heading, Image } from './styles'

export const Home = () => (
  <PageContainer>
    <Heading>Welcome to the Show Catalog</Heading>
    <Image src={heroImage}></Image>
    <AnchorButton to="/shows" role="button">
      Search shows
    </AnchorButton>
  </PageContainer>
)
