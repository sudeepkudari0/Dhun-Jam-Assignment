// App.js
import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const handleLogin = async (username: string, password: string) => {
    axios.post('https://stg.dhunjam.in/account/admin/login', { username, password })
    .then((response) => {
      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        alert('Login Failed');
      }
    })
    .catch((error) => {
      console.error('Error during login:', error);
      setError(error.response.data.message);
      alert('Invalid username or password');
      window.location.reload();
    });
      
    }
  return (
    <div>
      <Dashboard />
      {/* {isLoggedIn ? (
        <Dashboard />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )} */}
    </div>
  );
};

export default App;
