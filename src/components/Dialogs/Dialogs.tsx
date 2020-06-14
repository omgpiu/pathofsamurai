import React from 'react';
import st from './Dialogs.module.css'

function Dialogs() {
    return (

        <div className={st.dialogsWrapper}>

                <div className={st.dialogs}>
                    <div className={`${st.dialog} ${st.active}`}>Artem1</div>
                    <div className={st.dialog}>Vova2</div>
                    <div className={st.dialog}>Dima3</div>
                    <div className={st.dialog}>Masha4</div>
                    <div className={st.dialog}>Egor5</div>
                </div>
                <div className={st.messages}>
                    <div className={`${st.message} ${st.active}`}>Hi there</div>
                    <div className={st.message}>Hi there2</div>
                    <div className={st.message}>Hi there3</div>
                    <div className={st.message}>Hi there4</div>

                </div>


        </div>
    )
}


export default Dialogs