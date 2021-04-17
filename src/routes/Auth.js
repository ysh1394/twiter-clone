import { authService } from 'fBase';
import React, { useState } from 'react';

// export default () => <span>Auth</span>

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    // console.log('e >>>>>', e);
    // console.log('value >>>>>', value);
    // console.log('e.target.value >>>>>', e.target.value);
    // console.log('e.target.name >>>>>', e.target.name);
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        // Create Account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password,
        );
      } else {
        // Log In
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log('data >>>>> ', data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          required
        />
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          required
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span
        onClick={toggleAccount}
        onKeyUp={toggleAccount}
        role="button"
        tabIndex="0"
      >
        {newAccount ? 'Sign In' : 'Create Account'}
      </span>
      <button type="button">Google login</button>
      <button type="button">Github login</button>
    </div>
  );
};
export default Auth;
