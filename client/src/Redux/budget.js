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

const budgetReducer = (budget = { data: {}, loading: true }, action) => {
    switch (action.type) {
        case "LOAD_BUDGET":
            return {
                ...budget,
                data: action.budget,
                loading: false
            }
        case "SUBMIT_BUDGET":
            return {
                ...budget,
                data: action.budget,
                loading: false
            }
        case "EDIT_BUDGET":
            return {
                ...budget,
                data: action.budget,
                loading: false
            }
        default:
            return budget;
    }
}

export function loadBudget() {
    return dispatch => {
        return budgetAxios.get(budgetUrl)
            .then((response) => {
                dispatch({
                    type: "LOAD_BUDGET",
                    budget: response.data[0]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export function submitBudget(budgetObj) {
    console.log(budgetObj);
    return dispatch => {
        budgetAxios.post(budgetUrl, budgetObj)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "SUBMIT_BUDGET",
                    budget: response.data
                })
            })
            .catch(err => console.log(err));
    }
}

export const editBudget = (change) => {
    return dispatch => {
        budgetAxios.put(budgetUrl, change)
            .then((response) => {
                dispatch({
                    type: "EDIT_BUDGET",
                    budget: response.data
                });
            })
            .catch(err =>
                console.error(err)
            )
    }
}

export default budgetReducer;