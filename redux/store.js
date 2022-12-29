import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
