import {createStore, combineReducers, applyMiddleware} from "redux";
import auth from "./auth";
import budget from "./budget";
import profile from "./profile";
import thunk from "redux-thunk";

const rootReducer = (combineReducers({auth, budget, profile}));
let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    // console.log(store.getState())
})

export default store;