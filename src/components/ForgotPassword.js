// src/components/ForgotPassword.js
import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Basic email pattern validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSendLink = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      console.log('Reset link sent to:', email);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 30, marginTop: 100 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <EmailIcon fontSize="large" color="secondary" />
          <Typography variant="h5" gutterBottom>Forgot Password</Typography>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error)}
            helperText={error && <span style={{ color: 'red' }}>{error}</span>}
          />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSendLink}
            style={{ marginTop: 20 }}
          >
            Send Reset Link
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
