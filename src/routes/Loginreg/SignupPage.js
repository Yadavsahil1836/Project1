import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// 1) Optional fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 2) A container that covers the entire screen with a background image
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1528605248644-14dd04022da1')
    no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

// 3) A wrapper for the form with modern styling
const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.6s ease-in-out;
  text-align: center;

  @media (max-width: 480px) {
    padding: 2rem;
    border-radius: 1rem;
  }
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
  align-items: center;
  gap: 1.25rem;
  width: 100%;
`;

// 6) Styled input fields
const StyledInput = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }
`;

// 7) Styled button
const StyledButton = styled.button`
  width: 100%;
  max-width: 350px;
  padding: 0.85rem;
  background-color: #28a745;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 136, 56, 0.3);
    cursor: pointer;
  }
`;

// 8) A helper link for log in
const LoginLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function SignupPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add basic validation for password match
    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await fetch('http://localhost:1029/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (err) {
      console.error(err.message);
      alert(err.message || 'Something went wrong.');
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <FormWrapper>
          <HeadingWrapper>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Create an Account
            </h2>
            <p style={{ color: '#666' }}>Join us and start your journey</p>
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
            <StyledInput
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={credentials.confirmPassword}
              onChange={handleChange}
              required
            />

            <StyledButton type="submit">Sign Up</StyledButton>
          </Form> 

          <p style={{ marginTop: '1rem', textAlign: 'center', color: '#666' }}>
            Already have an account? <LoginLink href="/login">Log in</LoginLink>
          </p>
        </FormWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default SignupPage;
