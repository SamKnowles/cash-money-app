import axios from "axios";

let budgetAxios = axios.create();

budgetAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })

const budgetUrl = '/api/profile';

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
                data: [...budget.data, action.budget]
            }
        default:
            return budget;
    }
}

export function loadBudget() {
    return dispatch => {
        budgetAxios.get(budgetUrl)
            .then((response) => {
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
        budgetAxios.post(budgetUrl, category)
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