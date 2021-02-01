import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, MyInput} from '../FormControls';
import {LocalBtn} from '../../Btn/LocalBtn';

const maxLength = maxLengthCreator(30);
type AddPostFormValuesType = {
    newPostText: string
}
type PropsType = {}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({

                                                                                                    handleSubmit,
                                                                                                    ...props
                                                                                                }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<GetStringKeys<AddPostFormValuesType>>('Your post', 'newPostText', [required, maxLength], MyInput)}
            <div onClick={handleSubmit}>
                <LocalBtn/>
            </div>
        </form>
    );
};

export const AddNewPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: 'ProfileAddNewPostForm'})(AddPostForm)