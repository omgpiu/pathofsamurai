import React from 'react';
import st from './FormControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from '../../../utils/validators/validators';

type FormControlParamsType = {
    meta: WrappedFieldMetaProps

}


const FormControl: React.FC<FormControlParamsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    // <div className={`${st.formControl} ${st.error}`}>
    return <div className={st.formControl + ' ' + (hasError ? st.error : '')}>
        <div>
            {children}
        </div>
        {hasError && <span>{error}</span>}

    </div>;
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>;
};


export const MyInput: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>;
};

export const createField = (placeholder: string | undefined,
                            name: string,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}

        /> {text}
    </div>
);
export type GetStringKeys<T> = Extract<keyof T, string>
