export const SET_COMPONENT = 'SET_COMPONENT';

export const setComponentView = (cName) => (dispatch) => {
    dispatch({ type: SET_COMPONENT, payload: cName });
};



// need to be deleted
export const SET_PAGE = 'SET_PAGE';
export const CHANGE_PATH = 'CHANGE_PATH';
export const ADD_COMPONENT_S = 'ADD_COMPONENT_S';
export const RESET_COMPONENTS = 'RESET_COMPONENTS';

export const setPageView = (pName) => (dispatch) => {
    dispatch({ type: SET_PAGE, payload: pName });
};

export const addCompToView = (cName) => (dispatch) => {
    dispatch({ type: ADD_COMPONENT_S, payload: cName });
};

