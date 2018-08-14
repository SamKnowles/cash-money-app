import axios from "axios";

const userAxios = axios.create();
userAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    });

export function verifyUser() {
    return (dispatch) => {
        userAxios.get("/")
            .then((response) => {
                let { success, user } = response.data
                dispatch(authenticate(user, success));
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

export function signup(userInfo) {
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                const { token, user } = response.data;
                // add token to local storage
                localStorage.token = token;
                localStorage.user = JSON.stringify(user);
                dispatch(authenticate(user));
            })
            .catch(err => {
                console.error(err);
                // dispatch(authError("signup", err.response.status));
            });
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                dispatch(authenticate(user));
            })
            .catch((err) => {
                console.error(err);
                // dispatch(authError("login", err.response.status));
            });
    }
}

// function authError(key, errCode) {
//     return {
//         type: "AUTH_ERROR",
//         key,
//         errCode
//     }
// }

function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function logout() {
    delete localStorage.token;
    delete localStorage.user;
    return {
        type: "LOGOUT"
    }
}

// Auth reducer and state of auth reducer
// const initialState = {
//     username: "",
//     isAdmin: false,
//     isAuthenticated: false,
//     loading: true
// }

let initialState = {
    username: "",
    isAdmin: false,
    isAuthenticated: false,
    loading: true
    // authErrCode: {
    //     signup: "",
    //     login: ""
    // },
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true,
                // authErrCode: initialState.authErrCode,
                loading: false
            }
        // case "AUTH_ERROR":
        //     return {
        //         ...state,
        //         authErrCode: {
        //             ...state.authErrCode,
        //             [action.key]: action.errCode
        //         },
        //         loading: false
        //     }
        case "LOGOUT":
            return {
                ...initialState,
                loading: false
            }
        default:
            return state;
    }
}
