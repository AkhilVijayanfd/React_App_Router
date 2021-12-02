import Form from "../Pages/Form/Form";

import { shallow } from "enzyme";

describe( 'component from form', () =>{

    it ('renders form with header', () => {
        const wrapper = shallow(<Form/>);
        expect(wrapper.find('h2').text ()).toBe(' This page contains Form details ');
    });
});