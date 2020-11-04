import React from 'react';
import Header from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {logoutTC} from '../../Rdux/auth-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppRootStateType} from '../../Rdux/redux-store';


type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux


type PathParamsType = {
    id: string,
    email: string,
    login: string

}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null

}


class HeaderContainerAPI extends React.Component<PropsType> {


    render() {

        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => (
    {
        isAuth: state.auth.data.isAuth,
        login: state.auth.data.login
    });

type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {logoutTC});
export default withRouter(connector(HeaderContainerAPI));