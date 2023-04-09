import { combineReducers } from "redux";
import globalReducer from "./global/globalReducer";
import langReducer from "./lang/langReducer";
const rootReducer = combineReducers({
  stateLang: langReducer,
  stateGlobal: globalReducer,
});

export default rootReducer;
