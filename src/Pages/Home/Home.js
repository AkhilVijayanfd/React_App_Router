import React from "react";
import "./Home.css";
import Button from "./Button";

const Home = () =>{
    return(
        <div className="first">
            <h2> Welcome to the home page </h2>
            <div className= "message">
            <Button/>
            </div>
            
        </div>
        
    );
}
export default Home;