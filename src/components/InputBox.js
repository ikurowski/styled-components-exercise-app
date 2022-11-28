import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

// components
import InputComponent from './InputComponent';

export default function InputBox({ setUsers, setModalOn, setModalText }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value.trim() === '') {
      setModalText('Please enter a name');
      setModalOn(true);
      return;
    }

    if (e.target[1].value === '') {
      setModalText('Please enter an age');
      setModalOn(true);
      return;
    }

    if (e.target[1].value < 0) {
      setModalText('Please enter a positive age');
      setModalOn(true);
      return;
    }

    if (e.target[1].value === '0') {
      setModalText('Please enter a valid age');
      setModalOn(true);
      return;
    }

    if (e.target[1].value > 150) {
      setModalText('Please enter a valid age');
      setModalOn(true);
      return;
    }

    let newUser = {
      name: e.target[0].value,
      age: e.target[1].value,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    e.target[0].value = '';
    e.target[1].value = '';
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
