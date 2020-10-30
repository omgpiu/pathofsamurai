import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from '@material-ui/core';
import {useFormik} from 'formik';
import {loginTC} from '../../Rdux/auth-reducer';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {Redirect} from 'react-router-dom';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


const LoginForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 5) {
                errors.password = 'Must be 5 characters or more';
            }
            return errors;
        },

        onSubmit: values => {
            (
                props.loginTC(values));

        },
    });
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }
    return <form onSubmit={formik.handleSubmit}>

        <Grid container justify="center">
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />{
                        formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null
                    }
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />{
                        formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null
                    }
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox/>}
                            {...formik.getFieldProps('rememberMe')}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    </form>;


};
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});
type MapStatePropsType = {
    isAuth: boolean
}

export default connect(mapStateToProps, {loginTC})(LoginForm);
