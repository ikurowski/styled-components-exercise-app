import React from 'react';
import styled from 'styled-components';

export default function InputComponent({ headerText, type }) {
  
  return (
    <Container>
      <HeaderText>{headerText}</HeaderText>
      <Input type={type} />
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  & :focus {
    outline: none;
  }
`;
