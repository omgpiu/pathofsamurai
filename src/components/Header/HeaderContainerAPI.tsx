import React from 'react';
import Header from './Header';
import {connect, ConnectedProps} from 'react-redux';
import {getAuthUserDataTC, logoutTC} from '../../Rdux/auth-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type PropsType = RouteComponentProps<PathParamsType> & PropsFromRedux


type PathParamsType = {
    id: string,
    email: string,
    login: string
    // isAuth?:boolean
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string

}
type stateType = {
    auth: {
        isAuth: boolean
        login: string
    }
}

class HeaderContainerAPI extends React.Component<PropsType> {
    componentDidMount() {

      this.props.getAuthUserDataTC();
      // this.props.logoutTC();

    }


    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>;
        // }

        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: stateType): mapStateToPropsType => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    });

type PropsFromRedux = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {getAuthUserDataTC, logoutTC});
export default withRouter(connector(HeaderContainerAPI));