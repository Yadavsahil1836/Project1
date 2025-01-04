// src/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styled, { keyframes } from 'styled-components';

// 1) Optional fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 2) A container that covers the entire screen with a background image
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')
    no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 3) A wrapper for the form with a white background & some styling
const FormWrapper = styled.div`
  width: 380px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-in-out;
`;

// 4) A heading wrapper for the text at the top
const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

// 5) A styled form to space out elements
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 6) A styled input
const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// 7) A styled button
const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;

// 8) A helper link for sign up
const SignUpLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch('http://localhost:1029/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
      console.log(res);

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Dispatch success
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
      console.error(err);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <HeadingWrapper>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            Welcome Back
          </h2>
          <p style={{ color: '#666' }}>Log in to continue your journey</p>
        </HeadingWrapper>

        <Form onSubmit={handleSubmit}>
          <StyledInput
            type="email"
            id="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <StyledInput
            type="password"
            id="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <StyledButton type="submit">Login</StyledButton>
        </Form>

        <p style={{ marginTop: '1rem', textAlign: 'center', color: '#666' }}>
          New to Travelo? <SignUpLink href="/signup">Sign up</SignUpLink>
        </p>
      </FormWrapper>
    </Container>
  );
}

export default LoginPage;
