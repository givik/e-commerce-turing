import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="login" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
