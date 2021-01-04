import React, {useState} from 'react';
import cn from 'classnames';
import st from './Paginator.module.css';
import {Field, Form, Formik} from "formik";
import {isSubmitting} from "redux-form";


type PropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    portionSize?: number


}

const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.floor(currentPage / 10) + 1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (

        <div className={st.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1);
            }}>Prev</button>}


            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={cn({[st.selectedPage]: currentPage === p}, st.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>;
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1);
            }
            }>NEXT</button>}


            {/*{pages.map((p, i) => {*/}
            {/*    return <span key={i} onClick={(e) => {*/}
            {/*        props.onPageChanged(p);*/}
            {/*    }}*/}
            {/*                 className={props.currentPage === p ? st.selected : st.unselected}>{p}</span>;*/}
            {/*})}*/}
            <UserSearchForm/>
        </div>);
};

type UsersSearchObjectType = {
    term:string
}
const usersSearchFormValidate = (values: UsersSearchObjectType) => {
    const errors = {};
    return errors
}
const submit = async (values: UsersSearchObjectType) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(JSON.stringify(values, null, 2));
}

const UserSearchForm = () => {
    return <div>
        <Formik
            initialValues={{
                term: '',
            }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            <Form>
                <Field
                    id="term"
                    name="term"
                    type="text"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}

export default Paginator;
