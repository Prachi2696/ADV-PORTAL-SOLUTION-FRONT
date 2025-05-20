export async function fetchWithAuth(url, options = {}) {
    const token = window.sessionStorage.getItem("token");
    console.log("token ----"+token)
    // const storedToken = sessionStorage.getItem("token");
    const parsedToken = token ? JSON.parse(token) : null;
    const jwtToken = parsedToken?.jwtToken;
    console.log("jwtToken-"+jwtToken)
  
    const headers = {
      ...options.headers,
      ...(jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}),
      "Content-Type": "application/json"
    };
  
    const config = {
      ...options,
      headers
    };
  
    return fetch(url, config)
      .then(async response => {
        if (!response.ok) {
          const error = await response.json().catch(() => ({}));
          throw new Error(error.message || `HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  }
  