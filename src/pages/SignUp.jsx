
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../config/firebase';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const selectedRole = document.querySelector('input[name="role"]:checked').value;
  
      navigate(selectedRole === 'buyer' ? '/buyer-dashboard': '/seller-dashboard');
    } catch (error) {
      // Handle authentication errors
      console.error(error);
      alert('Authentication failed: ' + error.message); // Example error handling
    }
  };

  return (
    <form onSubmit={handleSignUp} className="login-container">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <div>
        <label>
          <input type="radio" name="role" value="buyer" checked /> Buyer
        </label>
        <label>
          <input type="radio" name="role" value="seller" /> Seller
        </label>
      </div>

      <button type="submit">Sign Up</button>
      <Link to="login">Already have an account?</Link>
    </form>
  );
}

export default SignUp;
