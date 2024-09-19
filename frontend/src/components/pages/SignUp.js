import { useState, useEffect } from 'react';
import "./SignUp.css";
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function SignUp() {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg !== "") {
      const timeout = setTimeout(() => setMsg(""), 15000);
      return () => clearTimeout(timeout);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "mobile":
        setError("");
        setMobile(e.target.value);
        if (e.target.value === "") {
          setError("Mobile number is required");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email address is required");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password is required");
        }
        break;
      case "confirm_pass":
        setError("");
        setConfirmPass(e.target.value);
        if (e.target.value === "") {
          setError("Password Confirmation is required");
        } else if (e.target.value !== pass) {
          setError("Passwords do not match!");
        }
        break;
      default:
        break;
    }
  };

  const checkPassword = () => {
    if (pass.length < 8) {
      setError("Password must be at least 8 characters long");
    }
    else if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter");
    }
    else if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter");
    }
    else if (!/[0-9]/.test(pass)) {
      setError("Password must contain at least one number");
    }
    else if (!/[@$!%*?&]/.test(pass)) {
      setError("Password must contain at least one special character");
    }
    else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile && pass && confirm_pass && pass === confirm_pass) {
      fetch('http://localhost:3001/register', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            mobile,
            email,
            pass
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userRegister");
        setMsg("Registration Successful...");
        localStorage.setItem("token", data.data);
        window.location.href = "./sign-in";
    })
    .catch((error) => console.error('Error:', error));
    
    } else {
      setError("All fields are required and passwords must match");
    }
  };

  
  return (
    <>
      <div className='room'>
        <form className='form'>
          <p>
            {msg !== "" ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
          </p>
          <p className='label'>Phone number</p>
          <input
            type="text"
            placeholder="phone number"
            className='input'
            name="mobile"
            value={mobile}
            onChange={(e) => handleInputChange(e, "mobile")}
           />
          <p className='label'>Email Adress</p>
          <input
            type="text"
            placeholder="email address"
            className='input'
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
           />
          <p className='label'>Password</p>
          <input
            type="password"
            placeholder="password"
            className='input'
            name="password"
            value={pass}
            onChange={(e) => handleInputChange(e, "pass")}
            onBlur={checkPassword} />
          <p className='label'>Confirm Password</p>
          <input
            type="password"
            placeholder="confirm password"
            className='input'
            name="confirm_pass"
            value={confirm_pass}
            onChange={(e) => handleInputChange(e, "confirm_pass")} />
          <button
            type="submit"
            className='Submit'
            onClick={handleSubmit}>Sign Up</button>
          <br />
          <Link to="/sign-in" className='account'>
            I already have an account
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;