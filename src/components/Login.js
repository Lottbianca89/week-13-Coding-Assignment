import React from 'react';

function Login() {
  return (
    <div>
      <h3>Login</h3>
      <form action="">
        <div>
          <label htmlFor="Username">Username</label>
          <br />
          <input type="text" name="Username" id="Username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


export default Login;




