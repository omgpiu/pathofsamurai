import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus   status={'it-kasa'} updateStatus={()=>{'kasa'} }/>);
        const instance = component.getInstance();
        //@ts-ignore
        expect(instance.state.status).toBe('it-kasa');
    });
    test("span lenght", () => {
        const component = create(<ProfileStatus   status={'it-kasa'} updateStatus={()=>{'kasa'} }/>);
        const root = component.root;
        //@ts-ignore
        let span =  root.findByType("span")
        //@ts-ignore
                expect(span.length).toBe(1);
    });

});