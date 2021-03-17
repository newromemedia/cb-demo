import {
    SET_GLOBAL_LANG,
    SET_GLOBAL_DNAME,
    SET_GLOBAL_MNAME,
    SET_GLOBAL_VMODE,
    SET_GLOBAL_BGMODE
} from '../actions';

const initialState = {
    lan: 'english',
    dom: (new Date().getDate()),
    dName: 'Sunday',
    month: (new Date().getMonth() + 1),
    mName: 'January',
    vMode: 'desktop',
    bgMode: 'darkMode'
};

export const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GLOBAL_LANG:
            return {
                ...state,
                lan: action.payload
            };
        case SET_GLOBAL_DNAME:
            return {
                ...state,
                dName: action.payload
            }
        case SET_GLOBAL_MNAME:
            return {
                ...state,
                mName: action.payload
            }
        case SET_GLOBAL_VMODE:
            return {
                ...state,
                vMode: action.payload
            }
        case SET_GLOBAL_BGMODE:
            return {
                ...state,
                bgMode: action.payload
            }
        default:
            return state;
    }
}