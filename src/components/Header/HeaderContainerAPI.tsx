import React from 'react';
import Header from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {setAuthUserData} from '../../Rdux/auth-reducer';
import {getAuthAPI} from '../../API/api';
import {RouteComponentProps} from 'react-router-dom'

// type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux
// type PathParamsType = {
//     userId: any
//     email: any
//     login: any
//     isAuth: any
//
// }



class HeaderContainerAPI extends React.Component<any> {

    componentDidMount() {
        getAuthAPI().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
                // зачем тут дата?
            }
        });
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
// type PropsFromRedux = ConnectedProps<typeof connector>
// const  connector = connect(mapStateToProps,{setAuthUserData})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainerAPI);