import React from "react";
import "./Label.css";

function Label(props){
    return(
        <>
        < div data-TestId ="Label" className="Label-style">
        {props.label1}
        </div>
        </>
    );
}

export default Label;