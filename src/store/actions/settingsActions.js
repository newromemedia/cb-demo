export const SET_GLOBAL_LANG = 'SET_GLOBAL_LANG';
export const SET_GLOBAL_DNAME = 'SET_GLOBAL_DNAME';
export const SET_GLOBAL_MNAME = 'SET_GLOBAL_MNAME';
export const SET_GLOBAL_VMODE = 'SET_GLOBAL_VMODE';
export const SET_GLOBAL_BGMODE = 'SET_GLOBAL_BGMODE';

export const setGlobalLanguage = (lang) => (dispatch) => {
    dispatch({ type: SET_GLOBAL_LANG, payload: lang });
};


/*
    Both Global Day Name, Global Month Name, and View Mode
    will set themselves automatically when the client loads.
*/

export const setGlobalDayName = () => (dispatch) => {
    const date = (new Date().getDay());
    let day;

    if(date === 0){
      day = "Sunday";
    }else if(date === 1){
      day = "Monday";
    }else if(date === 2){
      day = "Tuesday";
    }else if(date === 3){
      day = "Wednesday";
    }else if(date === 4){
      day = "Thursday";
    }else if(date === 5){
      day = "Friday";
    }else if(date === 6){
      day = "Saturday";
    }

    dispatch({ type: SET_GLOBAL_DNAME, payload: day });
}

export const setGlobalMonthName = () => (dispatch) => {
    const date = (new Date().getMonth());
    let month;

    if (date === 0){
      month = "January";
    }else if(date === 1){
      month = "February";
    }else if(date === 2){
      month = "March";
    }else if(date === 3){
      month = "April";
    }else if(date === 4){
      month = "May";
    }else if(date === 5){
      month = "June";
    }else if(date === 6){
      month = "July";
    }else if(date === 7){
      month = "August";
    }else if(date === 8){
      month = "September";
    }else if(date === 9){
      month = "October";
    }else if(date === 10){
      month = "November";
    }else if(date === 11){
      month = "December";
    }

    dispatch({ type: SET_GLOBAL_MNAME, payload: month });
};

/*
    In the useEffect send a 1 on the pageload dependency,
    after that state should be persisted and any other time
    a request is sent it should be able to get redirected into
    whatever the user input was.
*/

export const setGlobalViewMode = (vm) => (dispatch) => {
    if(vm === 1) {
        if(window.innerWidth < 400) {
            dispatch({ type: SET_GLOBAL_VMODE, payload: "mobile" })
        }else if(window.innerWidth < 900) {
            dispatch({ type: SET_GLOBAL_VMODE, payload: "tablet" })
        }else {
            dispatch({ type: SET_GLOBAL_VMODE, payload: "desktop" })
        }
    }else {
        dispatch({ type: SET_GLOBAL_VMODE, payload: vm })
    }
};

export const setGlobalBackgroundMode = (bg) => (dispatch) => {
    if(bg === 1) {
        dispatch({ type: SET_GLOBAL_BGMODE, payload: "lightMode" })
    }else if(bg === 2) {
        dispatch({ type: SET_GLOBAL_BGMODE, payload: "darkMode" })
    }
};