import {
    combineReducers
} from 'redux'


const initialState = () => {
    return {page: 1}
}



export const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.login;
        case 'LOG_OUT':
            return action.login;
        default:
            return state;
    }
};

export const ismodal = (state = {}, action) => {
    switch (action.type) {
        case 'IS_MODAL':
            return action.ismodal;
        default:
            return state;
    }
};


export const datafetch = (state = initialState, action) => {
    // console.log(state.page)
    switch (action.type) {
        // // case 'FETCH_DATA':
        // // 	return Object.assign({}, state, {
        // //        isFetching: true
        // //      });
        // case 'FETCH_DATA_OK':
        //     return action.tasks

        // case 'FETCH_DATA_NOK':
        //     return Object.assign({}, state, {
        //         isFetching: false,
        //         action: error
        //     });
        case 'asd':
            return {...state}
        case 'asdf':
            return {...state, page:2}
        default:
            return state;
    }
}


export const nextPageer = (state = {}, action) => {
    switch (action.type) {
        case 'NEXT_PAGE_OK':
            return datafetch = action.tasks;
        default:
            return state;
    }
}

export const reducers = combineReducers({
    login,
    ismodal,
    datafetch,
    initialState,
});