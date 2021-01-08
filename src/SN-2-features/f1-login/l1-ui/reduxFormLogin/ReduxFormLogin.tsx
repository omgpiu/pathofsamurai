import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../SN-1-main/m2-bll/redux-store';
import {createField, MyInput} from '../../../../SN-3-common/FormControls/FormControls';
import {required} from '../../../../utils/validators/validators';


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
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
export type LoginReduxFormTypeKeys = keyof LoginFormValuesType
export const LoginReduxForm = reduxForm<InjectedFormProps, any>({form: 'login'})(ReduxLoginForm);



