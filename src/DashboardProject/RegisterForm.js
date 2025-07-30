import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({ onSubmit = () => {} }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirm: '',
    gender: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const clear = () =>
    setForm({
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      confirm: '',
      gender: '',
    });

  const submit = () => {
    if (form.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    if (form.password !== form.confirm) {
      alert('Passwords must match');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('registrations')) || [];
    const updated = [...existing, form];
    localStorage.setItem('registrations', JSON.stringify(updated));

    onSubmit(form);
    navigate('/table');
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '3rem auto',
    padding: '2.5rem',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: '1.1rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem',
    marginBottom: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1.05rem',
  };

  const passwordContainer = {
    position: 'relative',
    marginBottom: '1.5rem',
  };

  const toggleStyle = {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#4f46e5',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  };

  const radioContainer = {
    marginBottom: '2rem',
  };

  const radioLabel = {
    display: 'block',
    marginBottom: '0.8rem',
    fontWeight: 600,
    color: '#333',
  };

  const radioOptionStyle = {
    display: 'block',
    marginBottom: '0.6rem',
    fontWeight: 500,
    cursor: 'pointer',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  };

  const buttonStyle = {
    padding: '0.9rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
  };

  const submitButton = {
    ...buttonStyle,
    backgroundColor: '#4f46e5',
    color: '#fff',
  };

  const clearButton = {
    ...buttonStyle,
    backgroundColor: '#f3f4f6',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#4f46e5', marginBottom: '2rem', fontSize: '2rem' }}>
        Create Your Account
      </h2>

      <label style={labelStyle}>Full Name</label>
      <input
        name="fullName"
        placeholder="Enter your full name"
        value={form.fullName}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Email Address</label>
      <input
        name="email"
        type="email"
        placeholder="Enter a valid email"
        value={form.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Mobile Number</label>
      <input
        name="mobile"
        type="tel"
        placeholder="10-digit mobile number"
        pattern="[0-9]{10}"
        value={form.mobile}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle}>Password</label>
      <div style={passwordContainer}>
        <input
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Minimum 6 characters"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <button
          type="button"
          style={toggleStyle}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <label style={labelStyle}>Confirm Password</label>
      <div style={passwordContainer}>
        <input
          name="confirm"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Re-enter your password"
          value={form.confirm}
          onChange={handleChange}
          style={inputStyle}
        />
        <button
          type="button"
          style={toggleStyle}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <div style={radioContainer}>
        <label style={radioLabel}>Gender</label>
        <label style={radioOptionStyle}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === 'male'}
            onChange={handleChange}
          />{' '}
          Male
        </label>
        <label style={radioOptionStyle}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === 'female'}
            onChange={handleChange}
          />{' '}
          Female
        </label>
        <label style={radioOptionStyle}>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={form.gender === 'other'}
            onChange={handleChange}
          />{' '}
          Other
        </label>
      </div>

      <div style={buttonContainerStyle}>
        <button style={submitButton} onClick={submit}>Submit</button>
        <button style={clearButton} onClick={clear}>Clear</button>
      </div>
    </div>
  );
}
