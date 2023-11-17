import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return <a  className='font-semibold text-center lowercase' onClick={() => logout()}>Cerrar sesión</a>;
};

export default LogoutButton;
