import axios from "axios";

let articleAxios = axios.create();
articleAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const budgetReducer = (profile = { data: [] }, action) => {
    switch (action.type) {
        case "LOAD_PROFILE":
            return {
                ...profile,
                data: action.profile,
            }
        case "ADD_CATEGORY":
            return {
                ...profile,
                data: [...profile.data, action.category],
            }
        default:
            return profile;
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
    return dispatch => {
        axios.post('../routes/cost', category)
            .then(response => dispatch({ type: "ADD_CATEGORY", category: response.data }))
            .catch(err => console.log(err))
    }
}


export default budgetReducer;