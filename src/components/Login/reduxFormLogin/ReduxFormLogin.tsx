import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../Rdux/redux-store';
import {required} from '../../../utils/validators/validators';
import {createField, MyInput} from '../../common/FormControls/FormControls';


export const ReduxLoginForm: React.FC<InjectedFormProps> = ({handleSubmit}) => {
    const captchaUrl = useSelector<AppRootStateType, string | null>(state => state.auth.captchaUrl);
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
            <div>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField('Symbols from image ', 'captcha', [required], MyInput, {})}
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm<InjectedFormProps, any>({form: 'login'})(ReduxLoginForm);



