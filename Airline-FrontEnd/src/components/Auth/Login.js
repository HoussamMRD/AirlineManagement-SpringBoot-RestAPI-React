import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css'; // Import your CSS file
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (loggedIn) {
    return <Redirect to="/Dashboard-Admin" />;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>
          <span>Welcome</span> 
        </h2>
        <form>
          <label>
            <span>
              <FaUser />
            </span>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <span>
              <FaLock />
            </span>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
