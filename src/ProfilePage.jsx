import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
  );
}

export { ProfilePage };