import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

// components
import InputComponent from './InputComponent';

export default function InputBox({ handleUsers, showModal, onSubmitErrorModalText }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value.trim() === '') {
      onSubmitErrorModalText('Please enter a name');
      showModal();
      return;
    }

    if (e.target[1].value === '') {
      onSubmitErrorModalText('Please enter an age');
      showModal();
      return;
    }

    if (e.target[1].value < 0) {
      onSubmitErrorModalText('Please enter a positive age');
      showModal();
      return;
    }

    if (e.target[1].value === '0') {
      onSubmitErrorModalText('Please enter a valid age');
      showModal();
      return;
    }

    if (e.target[1].value > 150) {
      onSubmitErrorModalText('Please enter a valid age');
      showModal();
      return;
    }

    handleUsers(e)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputComponent id="userName" type="text" label="User name" />
        <InputComponent id="age" type="number" label="Age (Years)" />
        <Button type="submit">Add User</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${styles.color.secondary};
  margin: 10px;
  margin-top: 25px;
  padding: 20px;
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Button = styled.button`
  height: 2rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${styles.color.primary};
  color: ${styles.color.textLight};
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }

  &:focus {
    outline: solid 2px ${styles.color.focusLight};
  }
`;
