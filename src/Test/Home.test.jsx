

import Home from "../Pages/Home/Home";

import { shallow } from "enzyme";

        it('renders home with header',() =>{

        const wrapper = shallow(<Home/>);
        expect(wrapper.find('h2').text ()).toBe(' Welcome to the home page ');
});