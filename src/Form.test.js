import Form from "./Pages/Form/Form";

import { shallow } from "enzyme";

// describe('Shallow Form Page',() =>{

    it ('Object check', () => {
        let wrapper = shallow(<Form/>);
        expect(wrapper.exists('.third')).toEqual(true);
    })
// });