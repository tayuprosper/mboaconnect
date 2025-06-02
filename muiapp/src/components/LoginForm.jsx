import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../auth/auth';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginerr, setLoginerr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginerr('');
    setLoading(true);

    const result = await login(formData);
    
    setLoading(false);
    
    if (result) {
      navigate("/dashboard");
    } else {
      setLoginerr("Invalid username or password");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-100/30 backdrop-blur-sm px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col gap-7 shadow-lg rounded-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-extrabold text-center text-blue-700">Log In</h2>

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="!bg-blue-700 !text-white !font-bold"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} className="text-white" /> : 'Log In'}
        </Button>

        {loginerr && (
          <p className="text-center text-red-600">{loginerr}</p>
        )}

        <p className="text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-700 font-bold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
