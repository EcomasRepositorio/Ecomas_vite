import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <a className='font-semibold text-center lowercase' onClick={() => loginWithRedirect()}>Iniciar sesión</a>;
};

export default LoginButton;
