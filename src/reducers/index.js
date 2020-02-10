import { combineReducers } from "redux";
import images from "./images";
import user from "./user";
import newUsers from "./newUsers";
export default combineReducers({
  images,
  user,
  newUsers
});
