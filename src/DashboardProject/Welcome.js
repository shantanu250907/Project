
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const cardStyle = {
    background: 'white',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
    zIndex: 2,
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#4f46e5',
  };

  const subheadingStyle = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'left',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1.2rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
  };

  const passwordContainerStyle = {
    position: 'relative',
    marginBottom: '1.2rem',
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

  const buttonStyle = {
    width: '100%',
    padding: '0.9rem',
    backgroundColor: '#4f46e5',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const signUpStyle = {
    marginTop: '1.5rem',
    fontSize: '0.95rem',
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#4f46e5',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Welcome Back 👋</h2>
        <p style={subheadingStyle}>Login to your account to continue</p>

        <div>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Password</label>
          <div style={passwordContainerStyle}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={toggleStyle}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#4338ca')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4f46e5')}
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Login
        </button>

        <div style={signUpStyle}>
          <p>Don't have an account?</p>
          <button style={linkStyle} onClick={() => navigate('/register')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
