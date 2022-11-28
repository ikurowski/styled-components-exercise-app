import React from 'react';
import styled from 'styled-components';

export default function InputComponent({ label, type, htmlFor, id }) {
  
  return (
    <Container>
      <Label htmlFor={htmlFor} >{label}</Label>
      <Input id={id} type={type} />
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Input = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: none;
  margin-top: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  & :focus {
    outline: none;
  }
`;
