import axios from "axios";

let articleAxios = axios.create();
articleAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const budgetReducer = (data = [], action) => {
    switch (action.type) {
        case "LOAD_PROFILE":
            return {
                data: action.profile,
                loading: false
            }
        case "ADD_CATEGORY": 
            return {
                data: [...data, action.profile],
        }
        default:
            return data;
    }
}

export function loadProfile() {
    return dispatch => {
        axios.get('/profile')
        .then(response => {
            dispatch({
                type: "LOAD_PROFILE",
                profile: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function addCategory(category) {
    return {
        type: 'ADD_CATEGORY',
        category
    }
}



export default budgetReducer;