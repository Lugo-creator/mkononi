import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import "./SignUp.css";

function SignIn() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [pass, setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("isLoggedIn");
        if (login) {
            navigate("/");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(() => { 
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(() => {
            setMsg("");
        }, 5000);
    }, [msg, navigate]);

    const handleInputChange = (e, type) => {
        switch(type) {
            case "mobile":
                setError("");
                setMobile(e.target.value);
                if (e.target.value === "") {
                    setError("Username cannot be empty");
                }
                break;
            case "password":
                setError("");
                setPassword(e.target.value);
                if (e.target.value === "") {
                    setError("Password cannot be empty");
                }
                break;
            default:
                break;
        }
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        if (mobile !== "" && pass !== "") {
            fetch('http://localhost:3001/login-user', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ mobile, pass }),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "ok") {
                    setMsg("Welcome");
                    localStorage.setItem("isLoggedIn", true);
                    setMsg("Login Successful...");
                    localStorage.setItem("token", data.data);
                    window.location.href = "./";
                } else {
                    setError("Invalid login credentials");
                }
            })
            .catch((error) => console.error('Error:', error));
        } else {
            setError("All fields are required");
        }
    }

    return (
        <>
            <div className='room'>
                <form className='form'>
                    <p>
                        {error ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>}
                    </p>
                    <p className='label'>Phone number</p>
                    <input
                        type="text"
                        placeholder="mobile number"
                        className='input'
                        value={mobile}
                        onChange={(e) => handleInputChange(e, "mobile")}
                        required
                    />
                    <p className='label'>Password</p>
                    <input
                        type="password"
                        placeholder="password"
                        className='input'
                        value={pass}
                        onChange={(e) => handleInputChange(e, "password")}
                        required
                    />
                    <br />
                    <input type="submit" className='Submit' onClick={loginSubmit} />
                    <br />
                    <Link to="/sign-up" className='account'>
                        I don't have an account
                    </Link>
                    <br />
                    <Link to="/resetpassword" className='account'>
                        Forgot Password?
                    </Link>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
