import React, { useContext } from 'react';
import { AuthContext } from './LoginContext';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
    const navigate = useNavigate();
    const { authenticate } = useContext(AuthContext);
  
    const handleLogin = () => {
      authenticate();
      navigate("/about"); 
    };
  
    return (
      <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
