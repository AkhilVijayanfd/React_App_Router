import React from "react";
function Text (props) {

    return(
        <input id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        
        />
    );
}
export default Text;