import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authActions, loginTC} from '../l2-bll/auth-reducer';
import {Button, Checkbox, Form, Input} from 'antd';
import st from './Login.module.css';
import {EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from '@ant-design/icons/lib/icons';
import {getIsAuth} from '../../f2-profile/p2-bll/profile-selectors';
import {getError} from '../l2-bll/auth-selectors';
import {LoginLabel} from './l2-old-features/LoginLabel';

const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(getError);
    const isAuth = useSelector(getIsAuth);

    if (isAuth) {
        return <Redirect to={PROFILE_PATH}/>;
    }
    const onSubmit = async (values: {
        email: string,
        password: string
    }) => {
        await dispatch(loginTC(values));
    };
    const resetError = () => {
        dispatch(authActions.setError(''))
    }
    return (<Form onFinish={onSubmit}
                  className={st.loginForm}
        >
            <LoginLabel/>
            <Form.Item
                name="email"
                {...error && {
                    help: error,
                    validateStatus: 'error',
                }}
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                       type="email"
                       name="email"
                       placeholder="Email"
                       onClick={resetError}
                />
            </Form.Item>
            <Form.Item
                name="password"
                {...error && {
                    help: error,
                    validateStatus: 'error'
                }}
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },

                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    onClick={resetError}
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a target={'_blank'} className={st.loginFormForgot} href="https://social-network.samuraijs.com/login">
                    Forgot password
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={st.loginFormButton}
                >
                    Log in
                </Button>
                Or <a target={'_blank'} href="https://social-network.samuraijs.com/signUp">register now!</a>
            </Form.Item>

        </Form>
    );
};


export default Login;