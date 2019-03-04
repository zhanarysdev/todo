import {
    combineReducers
} from 'redux'





export const login = (state = {login: false}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {login:action.login};
        case 'LOG_OUT':
            return {login:action.login};
        default:
            return state;
    }
};

export const isModal = (state = {isModal: false}, action) => {
    switch (action.type) {
        case 'IS_MODAL':
            return {isModal:action.changer};
        default:
            return state;
    }
};


export const datafetch = (state = {page:1}, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, isFetching: true}
        case 'FETCH_DATA_OK':
            return {...state, data: action.tasks, page: action.page, isFetching: false}

        case 'FETCH_DATA_NOK':
            return Object.assign({}, state, {
                isFetching: false,
                action: error
            });
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
    isModal,
    datafetch,
});