import React from 'react';

const Registration = () => {
  return (
    <div className="registration">
      <h1>Register</h1>
      <div>
        <input type="text" placeholder="login" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <input type="password" placeholder="repeat password" />
      </div>
      <div>
        <button>Registration</button>
      </div>
    </div>
  );
};

export default Registration;
