import React from "react";
import "./Form.css"
import Text from "../../Components/Text";
import Label from "../../Components/Label";
function Form  (props){
    return(
        <div className = "third">
            <h2> This page contains Form details </h2>
            <div className= "form">
                <Label label1="Name : "/>
                <Text id ="name" placeholder="Enter your Name" value="Akhil Vijayan"/>
                <br></br>
                <Label label1="Address : "/>
                <Text id ="address" placeholder="Enter your Address" value="Krishna Nivas, Block no.59, Elavupalam, Palode"/>
                <br></br>
                <Label label1="State : "/>
                <Text id ="state" placeholder="Enter your state" value="Kerala"/>
            </div>
        </div>

    );
};

export default Form;