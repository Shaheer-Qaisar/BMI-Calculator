import React from 'react'
import React1, { useState } from 'react'
import { Link } from 'react-router-dom'


function Loginform() {


    const hoverOn = (e) => {
        e.target.style.backgroundColor = "white"
        e.target.style.color = "black"
    }
    const hoverOff = (e) => {
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");


    const validateForm = () => {

        // NAME
        let flag = 1;
        if (name === "") {
            setNameError("Username is Empty");
            flag = 0;
        } else if (name.length < 3) {
            setNameError("Username should have atleast 3 Letters");
            flag = 0;
        } else {
            setNameError("");
            flag = 1;
        }

        // EMAIL

        if (email === "") {
            setEmailError("Email is empty");
            flag = 0;
        } else if (email.length < 5) {
            setEmailError("Email should contain 5 Letters");
            flag = 0;
        } else {
            setEmailError("");
            flag = 1;
        }

        // PASSWORD

        if (password === "") {
            setPassError("Password is Empty");
            flag = 0;
        } else if (password.length < 8) {
            setPassError("Password should contain 8 Letters");
            flag = 0;
        } else {
            setPassError("");
            flag = 1;
        }

        if (flag) {
            alert("Your Form has been Submitted");
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
        
            <div style={{ backgroundColor: "white", marginTop: "10%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "0" }}>
        <nav>
        <Link to="/" style={{textDecoration:"none",color:"white",backgroundColor:"orangered",padding:"10px 20px",border:"2px solid black",borderRadius:"8px",marginRight:"15rem"}}>Back</Link>
        </nav>
            
                <h1 style={{ fontSize: "50px",marginTop:"40px" }}>Sign In</h1>

                <hr style={{ width: "8rem", height: "5px", marginTop: "2px", marginBottom: "50px", backgroundColor: "black", borderRadius: "3px" }} />

                <form onSubmit={(e) => { e.preventDefault(); validateForm(); }} style={{ display: "flex", flexDirection: "column" }}>

                    <h3 style={{ marginRight: "90px" }}>Username:</h3>

                    {/* userInput */}

                    <input type="text" placeholder='Enter Username' id='userInp' value={name} onChange={(e) => { setName(e.target.value) }} style={{ margin: "10px 15px", padding: "10px", borderRadius: "10px", textAlign: "center" }} />

                    <p style={{ color: "red", fontSize: "15px", marginTop: "20px", display: nameError ? "block" : "none", textAlign: "center" }} id='userError'>{nameError}</p>

                    <h3 style={{ marginRight: "140px" }}>Email:</h3>

                    {/* emailInput */}

                    <input type="email" placeholder='Enter Email' id='emailInp' value={email} onChange={(e) => { setEmail(e.target.value) }} style={{ margin: "10px 15px", padding: "10px", borderRadius: "10px", textAlign: "center" }} />

                    <p style={{ color: "red", fontSize: "15px", marginTop: "20px", display: emailError ? "block" : "none", textAlign: "center" }} id='emailError'>{emailError}</p>

                    <h3 style={{ marginRight: "90px" }}>Password:</h3>

                    {/* passwordInput */}

                    <input type="password" placeholder='Enter Password' id='passInp' value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ margin: "10px 15px", padding: "10px", borderRadius: "10px", textAlign: "center" }} />

                    <p style={{ color: "red", fontSize: "15px", marginTop: "20px", display: passError ? "block" : "none", textAlign: "center" }} id='passError'>{passError}</p>

                    {/* submit Button */}

                    <button type='submit' style={{ backgroundColor: "black", color: "white", border: "2px solid black", padding: "10px 20px", borderRadius: "10px", fontSize: "18px", marginTop: "20px" }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>Sign In</button>
                </form>
            </div>
        </>
    )
}

export default Loginform