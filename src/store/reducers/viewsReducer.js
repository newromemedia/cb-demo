import {
    SET_PAGE,
    SET_COMPONENT,
    ADD_COMPONENT_S,
    RESET_COMPONENTS,
    CHANGE_PATH
} from '../actions'

const initialState = {
    page: 'landing',
    comp: 'search',
    stage: 1,
    path: window.location.pathname
}

export const viewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_COMPONENT:
            return {
                ...state,
                comp: action.payload
            }
        case CHANGE_PATH:
            return {
                ...state,
                path: window.location.replace('/' + action.payload)
            }
        default: 
            return state;
    }
}