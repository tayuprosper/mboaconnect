import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../auth/auth';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    type: '',
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be between 7 to 15 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters and include letters and numbers";
    }
    if (!formData.type) {
      newErrors.type = "Please select a user type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setLoading(true);
    const res = await signup(formData);
    setLoading(false);

    if (res) {
      navigate("/login");
    } else {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-100/30 backdrop-blur-sm px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col gap-7 shadow-lg rounded-2xl p-8 max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-extrabold text-center text-blue-700">Sign Up</h2>

        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          select
          label="User Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          error={!!errors.type}
          helperText={errors.type}
        >
          <MenuItem value="tutor">Tutor</MenuItem>
          <MenuItem value="learner">Learner</MenuItem>
          <MenuItem value="organisation">Organisation</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          className="!bg-blue-700 !text-white !font-bold"
        >
          {loading ? <CircularProgress size={24} className="text-white" /> : 'Sign Up'}
        </Button>

        {submitError && <p className="text-red-700 text-center">{submitError}</p>}

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 font-bold">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
