import React from 'react';
import { useSelector } from 'react-redux';
import { Login } from '../common/Login';
import { SignUp } from '../common/SignUp';

export const ComponentLoader = () => {
    const comp = useSelector(state => state.viewsReducer.comp)

    return (
        <div>
            {
                comp === "login" ? <Login /> :
                comp === "signup" ? <SignUp /> :

                null
            }
        </div>
    )
}