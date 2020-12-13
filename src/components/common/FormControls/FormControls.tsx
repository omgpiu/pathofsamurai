import React from 'react';
import st from './FormControls.module.css';
import {Field} from 'redux-form';

const FormControl: React.FC<any> = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    // <div className={`${st.formControl} ${st.error}`}>
    return <div className={st.formControl + ' ' + (hasError ? st.error : '')}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}

    </div>;
};

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>;
};


export const MyInput: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>;
};

export const createField = (placeholder: string, name: string, validators: any, component: any, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}

        /> {text}
    </div>
);
export type GetStringKeys<T> = Extract<keyof T, string>
