import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import "./SignUp.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

   

    const resetSubmit = (e) => {
        e.preventDefault();
        if (email!== "") {
            fetch('http://localhost:3001/forgot-password', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email}),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userReister");
                setMsg("Check Your Email")
                alert(data.status);
            });
        } else {
            setError("Enter Email");
        }
    }
    const handleInputChange = (e, type) => {
        switch(type) {
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Enter your email");
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className='room'>
                <form className='form'>
                    <p>
                        {error ? <span className='error'>{error}</span> : <span className='success'>{msg}</span>}
                    </p>
                    <p className='label'>Email Adress</p>
                    <input
                        type="text"
                        placeholder="email address"
                        className='input'
                        value={email}
                        onChange={(e) => handleInputChange(e, "email")}
                        required
                    />
                    <br />
                    <input type="submit" className='Submit' onClick={resetSubmit} />
                    <br />
                    <Link to="/sign-in" className='account'>
                        Login
                    </Link>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;
