import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST } from "./usertypes"

export const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}