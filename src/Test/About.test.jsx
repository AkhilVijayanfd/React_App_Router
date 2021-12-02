import About from "../Pages/About/About";

import { shallow } from "enzyme";


    it ('renders about with header', () => {
        const wrapper = shallow(<About/>);
        expect(wrapper.find('h2').text ()).toBe('This is the about page');
    })