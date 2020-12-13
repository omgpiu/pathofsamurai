import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export const ReduxLoginForm: React.FC<InjectedFormProps<any, any> & any> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field type="checkbox" name={'Remember me'} component={'input'}/> Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm<any, any>({form: 'login'})(ReduxLoginForm);



