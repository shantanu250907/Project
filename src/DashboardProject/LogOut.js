import React from 'react';

const WelcomeBack = () => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '5rem 2rem',
      background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
      minHeight: '100vh',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#4f46e5',
    },
    message: {
      fontSize: '1.2rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👋 Welcome Back!</h1>
      <p style={styles.message}>You have successfully logged out. See you soon!</p>
    </div>
  );
};

export default WelcomeBack;
