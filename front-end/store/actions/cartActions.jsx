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

//add products
export const addProducts = () => {
    return {
        type: TYPES.ADD_PRODUCTS
    }
}
//add cart action
export const addToCart = (id) => {
    return {
        type: TYPES.ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem = (id) => {
    return {
        type: TYPES.REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: TYPES.SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: TYPES.ADD_QUANTITY,
        id
    }
}

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: TYPES.ADD_QUANTITY_WITH_NUMBER,
        id,
        qty
    }
}

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: TYPES.RESET_CART
    }
}
