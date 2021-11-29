

import Home from "./Pages/Home/Home";

import { shallow } from "enzyme";

// describe('Shallow Home Page',() =>{

    it ('Object check', () => {
        let wrapper = shallow(<Home/>);
        expect(wrapper.exists('.first')).toEqual(true);
    })
// });