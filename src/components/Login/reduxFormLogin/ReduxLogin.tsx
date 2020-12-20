import React from 'react';
import {LoginReduxForm} from './ReduxFormLogin';

export const ReduxLogin = (props: any) => {
    const onSubmit = (formData: any) => {
    };
    return (
        <div>
            <h1>ReduxFormLogin</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>);
};


