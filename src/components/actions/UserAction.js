export function logInRequest(userName, password, cb){
    return {
        type: "LOGIN_REQUEST",
        userName,
        password,
        redirect: cb
    }
}

export function logInSuccess(){
    return {
        type: "LOGIN_SUCCESS"
    }
}

export function logInFail(){
    return {
        type: "LOGIN_FAIL"
    }
}

export function logInError(){
    return {
        type: "LOGIN_ERROR"
    }
}

export function logOut(){
    return {
        type: "LOGOUT"
    }
}