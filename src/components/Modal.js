import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

export default function Modal({ children, setModalOn }) {
  function onClickHandler() {
    setModalOn(false);
  }

  function outsideClickHandler(e) {
    if (e.target === e.currentTarget) {
      setModalOn(false);
    }
  }

  return (
    <Container onClick={outsideClickHandler}>
      <ModalContainer>
        <CloseButton onClick={onClickHandler}>X</CloseButton>
        <ModalText>{children}</ModalText>
      </ModalContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 30%;
  height: 30%;
  background-color: ${styles.color.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const ModalText = styled.h1`
  font-size: 1rem;
  margin: 20%;
`;

const CloseButton = styled.button`
  align-self: end;
  margin: 0.3rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: ${styles.color.primary};
  color: ${styles.color.textLight};
  cursor: pointer;
  &:focus {
    outline: solid 2px ${styles.color.focusLight};
  }
`;
