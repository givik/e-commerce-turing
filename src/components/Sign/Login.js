import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Login</h1>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
