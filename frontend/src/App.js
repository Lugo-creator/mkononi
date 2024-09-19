import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import SignUp from "./components/pages/SignUp.js";
import Martha from "./components/pages/Martha.js";
import Danken from "./components/pages/Danken.js";
import Enock from "./components/pages/Enock.js";
import Morgan from "./components/pages/Morgan.js";
import Dinu from "./components/pages/Dinu.js";
import Yilima from "./components/pages/Yilima.js";
import Margret from "./components/pages/Margret.js";
import Categories from "./components/pages/Categories.js";
import Ranks from "./components/pages/Ranks.js";
import SignIn from "./components/pages/SignIn.js";
import Download from "./components/pages/Download.js";
import Business from "./components/pages/Business.js";
import BizzDescription from "./components/pages/BizzDescription.js";
import Protected from "./Protected.js";
import generator from "./components/pages/generator.js";
import gen from "./components/pages/gen.js";
import ResetPassword from "./components/pages/ResetPassword.js";



function App() {
    return(
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Protected Component={Home} />} />
                <Route path="/categories" exact Component={Categories} />
                <Route path="/resetpassword" exact Component={ResetPassword} />
                <Route path="/download" exact Component={Download} />
                <Route path="/ranks" exact Component={Ranks} />
                <Route path="/generator" exact Component={generator}/>
                <Route path="/gen" exact Component={gen}/>
                <Route path="/Business" exact Component={Business} />
                <Route path="/sign-up" exact Component={SignUp} />
                <Route path="/sign-in" exact Component={SignIn} />
                <Route path="/description" exact Component={BizzDescription}/>    
                <Route path="/martha" exact Component={Martha} />
                <Route path="/danken" exact Component={Danken} />
                <Route path="/enock" exact Component={Enock} />
                <Route path="/mogan" exact  Component={Morgan} />
                <Route path="/dinu" exact Component={Dinu} /> 
                <Route path="/yilima" exact Component={Yilima} />
                <Route path="/margret" exact Component={Margret} />
            </Routes>
        </Router>
            
        </>
        
    );
}

export default App;