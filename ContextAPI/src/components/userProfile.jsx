
import React from "react";
import { useContext } from "react";
import { LogInContext } from "../App";

const Userprofile = (
    // isLoggedIn,
    // handleLogin,
    // handleLogout
)=>{
    
    const {isLoggedIn, handleLogin, handleLogout} = useContext(LogInContext)


    return(
        <div>
            {isLoggedIn ? (
                <div>
                <p>Welcome, User!</p>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please, Login</p>
                    <button onClick={handleLogin}>Login</button>
                </div>

            )}

            <h1>Hello i am from user Profile</h1>
        </div>
    )
}

export default Userprofile;