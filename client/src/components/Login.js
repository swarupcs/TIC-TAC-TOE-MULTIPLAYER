import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = () => {

    }
    return (
        <div className="login">
          <label htmlFor="">Login</label>
          <input
            placeholder="Username"
            onChange={(event) => {
                setUsername(event.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(event) => {
                setPassword(event.target.value);
            }}
          />
    
          <button onClick={login}>Log in</button>
        </div>
      );
}

export default Login
