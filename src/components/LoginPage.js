// src/components/LoginPage.js
import React, { useState, useContext } from 'react';
import {
  Container, TextField, Button, Typography, Link, Box, Paper, InputAdornment, IconButton
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../App";
const LoginPage = () => {
  const [email_id, setEmail_id] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContext);

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,12}$/;
    return pattern.test(password);
  };

  // const handleLogin = async () => {
  //   if (!validatePassword(password)) {
  //     setError('Password must be 8-12 characters, include uppercase, lowercase, number/symbol.');
  //   } else {
  //     setError('');
  //     console.log(email_id, password);

  //     try {
  //       const response = await fetch("http://localhost:8082/auth/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email_id, password }),
  //       });

  //       console.log(JSON.stringify({ email_id, password }))

  //       if (!response.ok) {
  //         throw new Error("Login failed");
  //       }

  //       const data = await response.text();
  //       const token  = data;

  //     //   console.log(data+"---------data")
  //     //   console.log(token+"---------token")

  //     //   localStorage.setItem("token", token);

  //       window.sessionStorage.setItem("token", token);
  //       setIsAuthenticated(true); 
  //       history.push("/deptadmin");
  //     } catch (err) {
  //       setError("Invalid credentials");
  //     }
  //   }


  // };

  const handleLogin = async () => {
    if (!validatePassword(password)) {
      setError('Password must be 8-12 characters, include uppercase, lowercase, number/symbol.');
      return;
    }

    setError('');

    try {
      const response = await fetch("http://localhost:8082/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_id, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      const token = data.jwtToken; // Adjust according to your backend response key

      window.sessionStorage.setItem("token", token);
      setIsAuthenticated(true);
      history.push("/deptadmin");
    } catch (err) {
      setError(err.message); // Show backend error on UI
    }
  };


  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 30, marginTop: 100 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <LockIcon fontSize="large" color="primary" />
          <Typography variant="h5" gutterBottom>Login</Typography>
          <TextField
            fullWidth
            label="Email Id"
            margin="normal"
            value={email_id}
            onChange={(e) => setEmail_id(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error)}
            helperText={error && <span style={{ color: 'red' }}>{error}</span>}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
          {error && (
            <Typography color="error" style={{ marginTop: '1em' }}>
              {error}
            </Typography>
          )}
          <Link
            component="button"
            variant="body2"
            onClick={() => history.push('/deptadmin/forgot-password')}
            style={{ marginTop: 10 }}
          >
            Forgot Password?
          </Link>
          <Typography variant="body2" style={{ marginTop: 20 }}>
            Not registered?{' '}
            <Link component="button" onClick={() => history.push('/register')}>
              Register here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
