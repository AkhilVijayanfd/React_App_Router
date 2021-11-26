import React from "react";
import { ReactDOM } from "react";
import Label from "../Label";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Label></Label>,div)
})

it("renders label correctly", () =>{
    const { getByTestId } = render(<Label label1 ="Name : "></Label>)
    expect (getByTestId ("Label")).toHaveTextContent("Name : ")
});

