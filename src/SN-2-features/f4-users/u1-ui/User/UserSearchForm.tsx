import {SearchOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {Field, Form, Formik} from 'formik';
import React from 'react';
import {useSelector} from 'react-redux';
import {FilterType} from '../../u2-bll/users-reducer';
import {getUsersFilter} from '../../u2-bll/users-selectors';
import st from './UserSearchForm.module.css';

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
};


export const UserSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged, ...rest}) => {
    console.log('searh form');
    const filter = useSelector(getUsersFilter);
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        };
        onFilterChanged(filter);
        setSubmitting(false);
    };
    return <>
        <Formik
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form className={st.forms_wrapper}>
                    <>
                        <Field
                            id="term"
                            name="term"
                            type="text"

                        />
                    </>
                    <>
                        <Field
                            component="select"
                            id="location"
                            name="friend"
                         >
                            <option value="null">All people</option>
                            <option value="true">Friends</option>
                            <option value="false">You may know</option>
                        </Field>

                    </>
                    <Button type="primary" htmlType={'submit'} disabled={isSubmitting} icon={<SearchOutlined/>}>
                        Search
                    </Button>
                </Form>)}
        </Formik>
    </>;
});

