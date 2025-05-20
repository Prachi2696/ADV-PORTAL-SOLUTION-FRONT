import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, MenuItem, Box, Paper,
  InputAdornment, IconButton, Select, FormControl, InputLabel
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useHistory } from 'react-router-dom';

const departments = [
  'Computer Science',
  'Information Technology',
  'Mechanical',
  'Electrical',
  'Electronics',
  'Civil'
];

const RegisterPage = () => {
  const history = useHistory();

  const [department, setDepartment] = useState('');
  const [username, setUsername] = useState('');
  const [email_id, setEmailId] = useState('');
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const validateEmail = (email_id) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_id);
  const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,12}$/.test(password);

  const handleSendOtp = () => {
    if (!validateEmail(email_id)) {
      setErrors(prev => ({ ...prev, email_id: 'Enter a valid email address.' }));
      return;
    }
    setErrors(prev => ({ ...prev, email_id: '' }));
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    alert(`OTP Sent to ${email_id}: ${generatedOtp}`);
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      setOtpVerified(true);
      setErrors(prev => ({ ...prev, otp: '' }));
    } else {
      setOtpVerified(false);
      setErrors(prev => ({ ...prev, otp: 'Invalid OTP' }));
    }
  };

  const handleSubmit = () => {
    let validationErrors = {};

    if (!department) validationErrors.department = 'Please select a department.';
    if (!username.trim()) validationErrors.username = 'Username is required.';
    if (!validateEmail(email_id)) validationErrors.email_id = 'Enter a valid email.';
    if (!otpVerified) validationErrors.otp = 'Please verify OTP first.';
    if (!validatePassword(password)) validationErrors.password = 'Password must be 8-12 chars, include uppercase, lowercase & digit/symbol.';
    if (password !== retypePassword) validationErrors.retypePassword = 'Passwords do not match.';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 30, marginTop: 50 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h5" align="center" gutterBottom>Register</Typography>

          <FormControl fullWidth error={Boolean(errors.department)}>
            <InputLabel>Department</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="Department"
            >
              {departments.map((dept, idx) => (
                <MenuItem key={idx} value={dept}>{dept}</MenuItem>
              ))}
            </Select>
            {errors.department && <Typography color="red">{errors.department}</Typography>}
          </FormControl>

          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(errors.username)}
            helperText={errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
          />

          <TextField
            fullWidth
            label="Email"
            value={email_id}
            onChange={(e) => setEmailId(e.target.value)}
            error={Boolean(errors.email_id)}
            helperText={errors.email_id && <span style={{ color: 'red' }}>{errors.email_id}</span>}
          />

          <Button variant="outlined" onClick={handleSendOtp}>Send OTP</Button>

          <TextField
            fullWidth
            label="Enter OTP"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
            error={Boolean(errors.otp)}
            helperText={errors.otp && <span style={{ color: 'red' }}>{errors.otp}</span>}
          />

          <Button variant="outlined" onClick={handleVerifyOtp}>Verify OTP</Button>
          {otpVerified && <Typography color="green">OTP Verified ✔</Typography>}

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
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

          <TextField
            fullWidth
            label="Retype Password"
            type={showPassword ? 'text' : 'password'}
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            error={Boolean(errors.retypePassword)}
            helperText={errors.retypePassword && <span style={{ color: 'red' }}>{errors.retypePassword}</span>}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>

          <Typography align="center" variant="body2" style={{ marginTop: 10 }}>
            Already registered?{' '}
            <span
              onClick={() => history.push('/login')}
              style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Login here
            </span>
          </Typography>
        </Box>
      </Paper>
    </Container>
    </>
    
  );
};

export default RegisterPage;
