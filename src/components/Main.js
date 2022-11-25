import React, { useState } from 'react';
import styled from 'styled-components';

//components
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import Modal from './Modal';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [modalText, setModalText] = useState('');

  function deleteUser(event, indexOfUser) {
    const newUsers = users.filter((user, i) => i !== indexOfUser);
    setUsers(newUsers);
    setModalText('User deleted!');
    setModalOn(true);
    setTimeout(() => {
      setModalOn(false);
    }, 1000);
  }

  return (
    <Container>
      <InputBox
        setUsers={setUsers}
        setModalOn={setModalOn}
        setModalText={setModalText}
      />
      {users.length > 0 && <OutputBox deleteUser={deleteUser} users={users} />}
      {modalOn && <Modal setModalOn={setModalOn}>{modalText}</Modal>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
