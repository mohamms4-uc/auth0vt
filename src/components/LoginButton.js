import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div style={{ backgroundColor: 'red', padding: '20px', borderRadius: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '4em', marginBottom: '20px' }}>UC Volunteer Tracker</h1>
        <button
          onClick={() => loginWithRedirect({})}
          style={{
            backgroundColor: 'red',
            color: 'black',
            border: '2px solid black',
            padding: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, border-color 0.3s',
            fontSize: '1.7em',
            fontFamily: 'Arial, sans-serif',
            width: '200px',  // Adjust button width as needed
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';  // Corrected to change text color on hover
            e.target.style.borderColor = 'black';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'red';
            e.target.style.color = 'black';  // Reset text color on mouse leave
            e.target.style.borderColor = 'black';
          }}
        >
          Sign in
        </button>
      </div>
    )
  );
};

export default LoginButton;
