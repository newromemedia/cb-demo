import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../common/Login';
import { SignUp } from '../common/SignUp';
import { Chatbot } from '../spec/Chatbot';
import { ComponentLoader } from '../spec/ComponentLoader';


export const Dashboard = () => {
    const comp = useSelector(state => state.viewsReducer.comp)

    return (
        <div>
            <div className="one__third">
                <ComponentLoader />
            </div>
            <aside>
                <Chatbot />
            </aside>
        </div>
    )
}