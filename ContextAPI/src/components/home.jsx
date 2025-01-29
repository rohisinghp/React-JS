import React from "react";
import Userprofile from "./userProfile";
import Dashboard from "./Dashboard";

// const Home = ({
//     isLoggedIn,
//     handleLogin,
//     handleLogout
// })=>{

    const Home= ()=>{

    return(
        <>
            {/* <Dashboard isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/> */}

            <Dashboard/>
        </>
    )
}

export default Home