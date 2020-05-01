const initiaState = {
    authenticated: false,
    authenticating: true
}

const loginReducer = (state = initiaState, action) => {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {
                ...state, 
                authenticating: true,
                authenticated: false
            }
        case "LOGIN_SUCCESS":
            return {
                ...state, 
                authenticating: false,
                authenticated: true
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                authenticating: false,
                authenticated: false
            }
        case "LOGOUT":
            return {
                ...state,
                authenticating: true,
                authenticated: false
            }
        default :
            return state
    }
}

export default loginReducer;