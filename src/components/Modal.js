import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { styles } from '../styles';

function ModalPortal({ children, hideModal, onBackgroundClickHandler }) {
  return (
    <Container onClick={onBackgroundClickHandler}>
      <ModalContainer>
        <CloseButton onClick={hideModal}>X</CloseButton>
        <ModalText>{children}</ModalText>
      </ModalContainer>
    </Container>
  );
}

export default function Modal({ children, hideModal }) {


  function onBackgroundClickHandler(e) {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  }

  return (
    <>
    {ReactDOM.createPortal(
      <ModalPortal hideModal={hideModal} onBackgroundClickHandler={onBackgroundClickHandler}>
        {children}
      </ModalPortal>,
      document.getElementById('modal-root')
    )}
    </>
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
  width: 300px;
  height: 200px;
  background-color: ${styles.color.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const ModalText = styled.h1`
  font-size: 1rem;
  margin: 50px;
  text-align: center;
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
