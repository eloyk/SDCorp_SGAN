import TYPES from './../types'

//CHECK_USRER_LOGIN
export const checkUserLogin = () => {
    return {
        type: TYPES.CHECK_USRER_LOGIN
    }
}

// USRER_LOGOUT
export const userLogout = () => {
    return {
        type: TYPES.USRER_LOGOUT
    }
}

// USRER_LOGIN
export const userLogin = () => {
    return {
        type: TYPES.USRER_LOGIN
    }
}