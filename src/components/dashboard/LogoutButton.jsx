import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    // Si el usuario no ha iniciado sesión, no muestra el botón de cerrar sesión.
    return null;
  }

  return <a className='font-semibold text-center lowercase' onClick={() => logout()}>Cerrar sesión</a>;
};

export default LogoutButton;




