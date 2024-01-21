import "./App.css"
//import NavBar from "./components/NavBar/NavBar";
//import NavBar from "./components/NavBar/NavBar";
// import Blogs from "./components/Blogs/Blogs";
//import AboutUs from "./components/AboutUS/AboutUs";
// import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
//import Profile from "./pages/Profile/Profile";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
<Router>
  {/* <NavBar/> */}
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/>  */}
        {/* <Profile/>         */}
        {/* <Login/> */}
        {/* <About/> */}
        {/* <Blog/> */}
        {/* <Contact/> */}
         <Routes>       
        {/* <Route path='/login' component={Login}/> */}
        
        <Route path='/' element={<Login/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/about' element={<About/>} exact/>
        <Route path='/blog' element={<Blog/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>   
        </Routes> 

        <footer> <p><b>Created by-Eli Ugolino,Bobbie Velazquez,Arianna Mireles,Thilini Dharmawardhana, © Copyrrite-2024</b></p></footer>  
    </div> 
    </Router>
  );
}

export default App;