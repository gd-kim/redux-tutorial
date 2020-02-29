// 입력 파라메터에 JSON 객체가 들어가고, 이 객체가 state를 구성한다.
import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";

export const allReducers = combineReducers({
  product : productReducer,
  user : userReducer
});
