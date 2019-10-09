const initialState = {
    menuList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false
}

const menuList = (state = initialState, action) => {
    switch (action.type) {
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
                menuList: action.payload.data.data
            }
        default:
            return state
    }
}

export default menuList