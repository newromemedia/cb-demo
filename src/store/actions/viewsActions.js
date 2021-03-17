export const SET_PAGE = 'SET_PAGE';
export const SET_COMPONENT = 'SET_COMPONENT';
export const ADD_COMPONENT_S = 'ADD_COMPONENT_S';
export const RESET_COMPONENTS = 'RESET_COMPONENTS';
export const CHANGE_PATH = 'CHANGE_PATH';

export const setPageView = (pName) => (dispatch) => {
    dispatch({ type: SET_PAGE, payload: pName });
};

export const setComponentView = (cName) => (dispatch) => {
    dispatch({ type: SET_COMPONENT, payload: cName });
};

export const addCompToView = (cName) => (dispatch) => {
    dispatch({ type: ADD_COMPONENT_S, payload: cName });
};

export const changePathView = (view) => (dispatch) => {
    dispatch({ type: CHANGE_PATH, payload: view });
};