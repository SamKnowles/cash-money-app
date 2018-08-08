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

const budgetUrl = "/api/budget";

const budgetReducer = (budget = { data: {} }, action) => {
    switch (action.type) {
        case "LOAD_BUDGET":
            return {
                data: action.data,
            }
        case "ADD_CATEGORY":
            return {
                data: budget.data
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