const initiaState = {
    authenticated: false,
    authenticating: false,
    formState: {
        userName: "",
        password: ""
    },
    errorMsg: ""
}

const loginReducer = (state = initiaState, action) => {
    switch (action.type){
        case "LOGIN_REQUEST_ASYNC":
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
        case "UPDATE_USER":
            return {
                ...state, 
                authenticating: false,
                authenticated: true,
                formState: {
                    userName: action.userName,
                    password: action.password
                }
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                authenticating: false,
                authenticated: false,
                errorMsg: "Login Fail"
            }
        case "LOGOUT":
            return {
                ...state,
                authenticating: false,
                authenticated: false
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                authenticating: false,
                authenticated: false,
                errorMsg: "Login Error"
            }
        default :
            return state
    }
}

export default loginReducer;