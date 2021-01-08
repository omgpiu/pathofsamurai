import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from './ProfileStatusClass';


describe.skip('ProfileStatus component', () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'it-kasa'} updateStatus={() => {
            return 'kasa'
        }}/>);
        const instance = component.getInstance();
        //@ts-ignore
        expect(instance && instance.state.status).toBe('it-kasa');
    });
    test.skip("span lenght", () => {
        const component = create(<ProfileStatus status={'it-kasa'} updateStatus={() => {
            return 'kasa'
        }}/>);
        const root = component.root;
        let span = root.findByType("span")
        //@ts-ignore
        expect(span.length).toBe(1);
    });

});