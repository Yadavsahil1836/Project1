// src/routes/login.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loginpage from './Loginreg/Loginpage'; // <--- ensure the path matches your folder structure

function Login() {
  return (
    <main>
      <Navbar />
      <Loginpage />
      <Footer />
    </main>
  );
}

export default Login;
