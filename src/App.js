import React from 'react';
import './App.css';
import logo from './assets/gh_head.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="GitHub Logo" />
      </header>
      <div>
        <h1>Sign in to GitHub</h1>
      </div>
      <form>
        <label>
          Username or email address
          <br />
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password
          <a href="#" className="forgot-password">Forgot password?</a>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Sign in" />
        <br />
        <a href="#" className="passkey">Sign in with a passkey</a>
        <div>
  New to GitHub?<a href="#" className="acc">Create an account</a>
      </div>
      </form>
      <footer>
    <span>Terms</span>
    <span>Privacy</span>
    <span>Docs</span>
    <span>Contact GitHub Support</span>
    <span>Manage cookies</span>
    <span>Do not share my personal information</span>
</footer>

    </div>
  );
}

export default App;
