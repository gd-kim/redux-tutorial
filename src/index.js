import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

// es6 디폴트 파라메터 : 파라메터가 undefined 일때 초기화
const productReducer = (state=[], action)=>{
  return state;

}

const userReducer = (state='', action) =>{
  if(action.type === 'updateUser'){
    return action.payload;
  }
  return state;
}

// 입력 파라메터에 JSON 객체가 들어가고, 이 객체가 state를 구성한다.
const allReducers = combineReducers({
  product : productReducer,
  user : userReducer
});



const action = {
  type : 'updateUser',
  payload : 'Tom'

}

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(action);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
