import React from 'react';
import {connect} from 'react-redux';
import { togglefollowingInProgress, SetCurrentPage, getUsersC, fallow, unfallow } from '../../redux/state/Users-reducer';
import Users from './Users';
import Loader from './loader';
import {
    curentPageSelect,
    followingInProgresSelect,
    isFetcingSelect,
    pageSizeSelect,
    totalUsersCountSelect,
    userSelect
} from "./users-selectors";
class UsersCont extends React.Component{
    componentDidMount(){
        this.props.getUsersC(this.props.curentPage, this.props.pageSize);
    }
    onPageChanged = (p) => {
        this.props.getUsersC(p, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetcing ? <Loader/> : null}
            <Users    onPageChanged={this.onPageChanged}
                      totalUsersCount = {this.props.totalUsersCount}
                      pageSize= {this.props.pageSize}
                      curentPage={ this.props.curentPage}
                      unfallow= {this.props.unfallow}
                      fallow = {this.props.fallow}
                      users={this.props.users}
                      togglefollowingInProgress={this.props.togglefollowingInProgress}
                      followingInProgress = {this.props.followingInProgress }
        />
        </>
    }
};
let mapStateToProps = (state) => {
    return {
        users: userSelect(state),
        pageSize: pageSizeSelect(state),
        totalUsersCount: totalUsersCountSelect(state),
        curentPage: curentPageSelect(state),
        isFetcing:isFetcingSelect(state),
        followingInProgress: followingInProgresSelect(state),
    }
};
/*let mapDispatchToProps = (dispatch) => {
    return {
        fallow: (userID) => {
            dispatch(fallowAC(userID));
        },
        unfallow: (userID) => {
            dispatch(unfallowAC(userID));
        },
        setuser: (users) => {
            dispatch(set_user(users));
        },
        setTotalCount:(TotalCount) =>{
            dispatch(set_TotalCountAC(TotalCount));
        },
        SetCurrentPage: (p) =>{
            dispatch(set_curentPageAC(p));
        },
        toggleisFetcing: (isFetcing) =>{
            dispatch(setisFetcingAC(isFetcing));
        }
    }
};*/
export default connect(mapStateToProps,
    {fallow, unfallow, SetCurrentPage,togglefollowingInProgress, getUsersC
})(UsersCont);
