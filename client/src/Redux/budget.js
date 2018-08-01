import axios from "axios";

let budgetAxios = axios.create();
budgetAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config
    })

const budgetReducer = (budget = { data: {} }, action) => {
    switch (action.type) {
        case "LOAD_BUDGET":
            return {
                ...budget,
                data: action.budget,
            }
        case "ADD_CATEGORY":
            return {
                ...budget,
                data: action.category,
            }
        default:
            return budget;
    }
}

export function loadBudget() {
    return dispatch => {
        budgetAxios.get('/budget')
            .then(response => {
                dispatch({
                    type: "LOAD_BUDGET",
                    budget: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export function addCategory(category) {
    return dispatch => {
        budgetAxios.post('/api/budget', category)
            .then(response => {
                dispatch({
                    type: "ADD_CATEGORY",
                    category: response.data
                })
            })
            .catch(err => console.log(err))
    }
}

export default budgetReducer;