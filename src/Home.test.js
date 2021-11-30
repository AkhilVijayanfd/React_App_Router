

import Home from "./Pages/Home/Home";

import { mount } from "enzyme";

describe('Shallow Home Page',() =>{

        const wrapper = mount(<Home/>);
        expect(wrapper).toContainElement('.first');
});