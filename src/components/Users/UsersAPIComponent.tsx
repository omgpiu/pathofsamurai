import React from 'react';
import Users from './Users';
import PreLoader from '../common/preLoader/preLoader';
import {userType} from '../../Types/Types';
import {FilterType} from '../../Rdux/users-reducer';


export type PropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    filter: FilterType

}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.getUsersTC(currentPage, pageSize, filter);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.getUsersTC(pageNumber, pageSize, filter);
    };
    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props;
        this.props.getUsersTC(1, pageSize, filter)
    }

    render() {

        return <>
            {this.props.isFetching ? <PreLoader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
                   onFilterChanged={this.onFilterChanged}

            />;

        </>;
    }
}


export default UsersAPIComponent;
