import React, { useEffect, useState } from "react";

function ProtectedPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    const token = sessionStorage.getItem("token");

    console.log("Using token:", token);  // Debug output
    const storedToken = sessionStorage.getItem("token");
    const parsedToken = storedToken ? JSON.parse(storedToken) : null;
    const jwtToken = parsedToken?.jwtToken;
    console.log("jwtToken-"+jwtToken)

    fetch("http://localhost:8082/test", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2>Protected Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ProtectedPage;
