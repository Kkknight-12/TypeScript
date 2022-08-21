import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

/* take reducers and give typeof whatever reducers return*/
export type RootState = ReturnType<typeof reducers>;