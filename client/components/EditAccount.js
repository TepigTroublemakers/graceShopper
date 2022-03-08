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

  return (
    <div id="editUser">
      <form
        id="editUserForm"
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
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input
            name="firstName"
            value={changeFN || ''}
            onChange={(e) => setChangeFN(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input
            name="LastName"
            value={changeLN || ''}
            onChange={(e) => setChangeLN(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            name="username"
            value={changeUsername || ''}
            onChange={(e) => setChangeUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input
            name="email"
            value={changeEmail || ''}
            onChange={(e) => setChangeEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">
            <small>Address</small>
          </label>
          <input
            name="address"
            value={changeAddress || ''}
            onChange={(e) => setChangeAddress(e.target.value)}
          />
        </div>
        <div id="submitEdit">
          <button type="submit">Submit</button>
          <button onClick={() => history.back()}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
