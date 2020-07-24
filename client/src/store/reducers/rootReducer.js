import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { quotesReducer } from "./quotesReducer";

export const rootReducer = combineReducers({
  quotes: quotesReducer,
  loading: loadingReducer,
});
