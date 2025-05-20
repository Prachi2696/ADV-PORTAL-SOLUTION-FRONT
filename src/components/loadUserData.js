import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchWithAuth } from './fetchWithAuth';

export default function LoadUserData() {
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const token = window.sessionStorage.getItem("token");
    const token = sessionStorage.getItem("token");
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const exp = payload.exp;
            if (Date.now() >= exp * 1000) {
                sessionStorage.removeItem("token");
                history.push('/deptadmin/loginwithjwt');
            }
        }

    async function getUserData() {
      try {
        const data = await fetchWithAuth('http://localhost:8082/test');
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    }

    getUserData();
  }, [history]);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <h1>Test Page</h1>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
}
