import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../store/editUser';

const EditAccount = () => {
  const dispatch = useDispatch();
  const [changeUsername, setChangeUsername] = useState('');
  const [changeEmail, setChangeEmail] = useState('');
  const [changeFN, setChangeFN] = useState('');
  const [changeLN, setChangeLN] = useState('');
  const [changeAddress, setChangeAddress] = useState('');
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    setChangeUsername(auth.username);
    setChangeEmail(auth.email);
    setChangeAddress(auth.address);
    setChangeFN(auth.firstName);
    setChangeLN(auth.lastName);
  }, []);

  console.log(auth);

  return (
    <div id="editUser">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            updateUser({
              username: changeUsername,
              email: changeEmail,
              firstName: changeFN,
              lastName: changeLN,
              address: changeAddress,
            })
          );
        }}
      >
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          value={changeFN || ''}
          onChange={(e) => setChangeFN(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          name="LastName"
          value={changeLN || ''}
          onChange={(e) => setChangeLN(e.target.value)}
        />
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          value={changeUsername || ''}
          onChange={(e) => setChangeUsername(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={changeEmail || ''}
          onChange={(e) => setChangeEmail(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
        <input
          name="address"
          value={changeAddress || ''}
          onChange={(e) => setChangeAddress(e.target.value)}
        />
        <button id="submitEdit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
