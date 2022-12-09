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


  function handleUsers (e) {
    let newUser = {
      name: e.target[0].value,
      age: e.target[1].value,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    e.target[0].value = '';
    e.target[1].value = '';
  }

  function showModal () {
    setModalOn(true);
  }
  function hideModal () {
    setModalOn(false);
  }

  function onSubmitErrorModalText (text) {
    setModalText(text);
  }

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
        handleUsers={handleUsers}
        showModal={showModal}
        onSubmitErrorModalText={onSubmitErrorModalText}
      />
      {users.length > 0 && <OutputBox deleteUser={deleteUser} users={users} />}
      {modalOn && <Modal hideModal={hideModal}>{modalText}</Modal>}
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
