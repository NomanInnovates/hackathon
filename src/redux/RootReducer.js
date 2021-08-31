import { combineReducers } from "redux";
import AuthReducers from "./reducers/AuthReducer";
import ResturantDataReducer from "./reducers/ResturantDataReducer";

const rootReducer = 
combineReducers({AuthReducers,ResturantDataReducer});


export default rootReducer