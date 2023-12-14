import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    // Si el usuario ya ha iniciado sesión, no muestra el botón de iniciar sesión.
    return null;
  }

  return <a className='font-semibold text-center lowercase' onClick={() => loginWithRedirect()}>Iniciar sesión</a>;
};

export default LoginButton;

