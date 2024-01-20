import React, { useState } from "react";
import "./Login.css";
import Logo from "../../img/logo.webp";
import { logIn, signUp } from "../../actions/LoginActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
      };
      const loading = useSelector((state) => state.loginReducer.loading);
      const useNavigate = logIn();
      const navigate = useNavigate();
      const dispatch = useDispatch();//instance of a hook
      const [isSignUp, setIsSignUp] = useState(false);
    
      const [data, setData] = useState(initialState);
    
      const [confirmPass, setConfirmPass] = useState(true);
  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });//use single function for all our inputs
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };
    
  return (
    <div className="Login">
        {/* LeftSide with the logo and navbar */}
      <div className="a-left">
        <img src={Logo} alt="HobbyHUB custom logo shout out Ari!" />
        <div className="Webname">
          <h1>Hobby Hub</h1>
        </div>
      </div>
        {/* rightside  */}
      <div className="a-right">
      <form className="infoForm loginForm" onSubmit={handleSubmit}>
      <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}
        <div>
          <input
          required
            type="text"
            className="infoInput"
            name="hobbies"
            placeholder="Hobbies"
            value={data.hobbies}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
          required
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
          required
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
          required
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
           {isSignUp && (
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            value={data.confirmpass}
            onChange={handleChange}
          />
           )}
        </div>

        <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
             *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
                {/* <span style={{fontSize: '14px'}}>Already have an account. Login!</span> */}
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
            </div>
      </form>
    </div>
      {/* <LogIn/> 
      <SignUp/> */}
    </div>
  );
};
// function LogIn() {
//     return (
//       <div className="a-right">
//         <form className="infoForm loginForm">
//           <h3>Log In</h3>
  
//           <div>
//             <input
//               type="text"
//               placeholder="Username"
//               className="infoInput"
//               name="username"
//             />
//           </div>
  
//           <div>
//             <input
//               type="password"
//               className="infoInput"
//               placeholder="Password"
//               name="password"
//             />
//           </div>
//           <div>
//               <span style={{ fontSize: "12px" }}>
//                 Forgot password?
//               </span>
//           </div>
//           <div>
//               <span style={{ fontSize: "14px" }}>
//                 Don't have an account Sign up
//               </span>
              
//             <button className="button infoButton">Login</button>
            
//           </div>
//         </form>
//       </div>
//     );
//   }
// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm loginForm">
//         <h3>Sign up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="hobbies"
//             placeholder="Hobbies"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="email"
//             placeholder="Email"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="text"
//             className="infoInput"
//             name="confirmpass"
//             placeholder="Confirm Password"
//           />
//         </div>

//         <div>
//             <span style={{fontSize: '14px'}}>Already have an account. Login!</span>
//         </div>
//         <button className="button infoButton" type="submit">Sign up</button>
//       </form>
//     </div>
//   );
// }

export default Login;
