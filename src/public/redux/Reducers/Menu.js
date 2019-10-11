const initialState = {
    menuList: [], // go to get all in home
    errMessage: '',
    isLoading: false,
    isFulfilled: false,
    isRejected: false
}

const menuList = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_MENU_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_MENU_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_MENU_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                menuList: payload.data,
                pages: payload.pages
            }
        default:
            return state
    }
}

export default menuList