import About from "./Pages/About/About";

import { shallow } from "enzyme";

// describe('Shallow About Page',() =>{

    it ('Object check', () => {
        let wrapper = shallow(<About/>);
        expect(wrapper.exists('.second')).toEqual(true);
    })
// });