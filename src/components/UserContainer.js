import React, { useEffect } from 'react';
// import { connect } from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUsers } from '../redux';

function UserContainer() {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        userData.loading && (
            <h2>Loading</h2>
        ) || 
        userData.error && (
            <h2>{userData.error}</h2>
        ) ||
        <div>
            <h2>Users List</h2>
            {
                userData &&
                userData.users &&
                userData.users.map(user => <p>{user.name}</p>)
            }
        </div>
    )
}

export default UserContainer