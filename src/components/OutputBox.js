import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

// components

export default function OutputBox({ users, deleteUser }) {
  return (
    <Container>
      {users.map((user, index) => (
        <Output key={Math.random().toString()} onClick={event => deleteUser(event, index)}>
          {user.name + ` (${user.age} years old)`}
        </Output>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${styles.color.secondary};
  margin: 10px;
  padding: 20px;
  width: 70%;
  & :last-child {
    margin-bottom: 0.5rem;
  }
`;

const Output = styled.li`
  height: 2rem;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  background-color: ${styles.color.textLight};
  list-style: none;
`;
