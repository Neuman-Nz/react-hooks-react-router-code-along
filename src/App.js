import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom"

function App() {
    // return <Home />;
    return(
           <div>
            <Navbar/>
              <Routes>
               <Route exact path="/"element={<Home />}/>
               <Route exact path="about"element={<About />}/>
               <Route exact path="login"element={<Login />}/>
           </Routes>
           </div>
    )
  }

  export default App