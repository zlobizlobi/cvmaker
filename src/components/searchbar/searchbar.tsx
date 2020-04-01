import React from 'react';
import { Container, Label, Input } from './styles';

interface IProps {
  onChange: (e: any) => void;
}

export const SearchBar: React.FC<IProps> = ({ onChange }) => (
  <Container>
    <Label htmlFor="search">Search for a show</Label>
    <Input type="text" name="search" onChange={onChange} />
  </Container>
);
