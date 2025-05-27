"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './sign.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    if (email && !email.includes('@')) {
      setEmailError("И-мэйл хаягт '@' тэмдэг байх ёстой.");
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      validateEmail(value);
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      return;
    }
    
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button onClick={() => window.history.back()} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="logo-container">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={64} 
            height={64}
            className="logo"
            priority
          />
        </div>
        
        <h2 className="login-title">
          Email нууц үгээ оруулж нэвтрэнэ үү!
        </h2>
        
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text" 
              id="email"
              className={`form-input ${emailError ? 'input-error' : ''}`}
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <div className="error-message">
                <div className="error-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <span>{emailError}</span>
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Нууц үг
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="login-button"
          >
            Нэвтрэх
          </button>
        </form>
        
        <p className="footer-text">
          Нэвтрэх эрхгүй бол хамаарал бүхий цэцэрлэгийн мэргэжилтэнтэй холбогдоно уу!
        </p>
      </div>
    </div>
  );
};

export default LoginPage;