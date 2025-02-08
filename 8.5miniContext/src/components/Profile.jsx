import React from "react";
import {useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = ()=>{

    const {user} = useContext(UserContext)

    
          if (!user) {
           return <div>Login Please!</div>
            
          }
          return(
            <h1>
                Hello {user.username}
            </h1>
          )

    
}
export default Profile;