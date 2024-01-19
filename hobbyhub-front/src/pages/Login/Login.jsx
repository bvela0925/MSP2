import React from "react";
import "./Login.css";
import Logo from "../../img/logo.webp";

const Login = () => {
  return (
    <div className="Login">
      <div className="a-left">
        <img src={Logo} alt="HobbyHUB custom logo shout out Ari!" />
        <div className="Webname">
          <h1>Hobby Hub</h1>
        </div>
      </div>

      <LogIn/> 
      {/* <SignUp/> */}
    </div>
  );
};
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm loginForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
          <div>
              <span style={{ fontSize: "12px" }}>
                Forgot password?
              </span>
          </div>
          <div>
              <span style={{ fontSize: "14px" }}>
                Don't have an account Sign up
              </span>
              
            <button className="button infoButton">Login</button>
            
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm loginForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="hobbies"
            placeholder="Hobbies"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
            <span style={{fontSize: '14px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Login;
