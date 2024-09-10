import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({username});
  }

  if (auth.user) {
    return <Navigate to='/profile'/>
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login} style={{display: 'flex', flexDirection: 'column'}}>
        <label>Escribe tu nombre</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text" 
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };