import React from 'react';
import heroImage from '../../images/heroImage.jpg';
import { PageContainer } from '../../components';
import { Heading, Image, Container, AnchorButton } from './styles';

export const Home: React.FC = () => (
  <PageContainer>
    <Container>
      <Heading>Welcome to the Show Catalog</Heading>
      <Image src={heroImage}></Image>
      <AnchorButton to="/shows" role="button">
        Search shows
      </AnchorButton>
    </Container>
  </PageContainer>
);
