import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    console.log('bye');
    auth.logout();
  }

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout} style={{display: 'flex', flexDirection: 'column'}}>
        <label>¿Seguro que quieres salir?</label>
        
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { LogoutPage };