import React from "react";
import { ReactDOM} from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

it ("render without crashing", () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Form/>,div);
    ReactDOM.unmountComponentAtNode(div);
});