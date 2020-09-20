import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../Rdux/auth-reducer';
import {getAuthAPI} from '../../API/api';

class HeaderContainerAPI extends React.Component<any> {

    componentDidMount() {
        getAuthAPI().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
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
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainerAPI);