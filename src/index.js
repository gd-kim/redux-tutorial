import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const reducer = (state, action) =>{
  console.log("action : ",action);

  if(action.type === 'changeState'){
    return action.payload.newState;
  }
  return 'State';
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
console.log(store.getState());

//1. 가입
store.subscribe(()=> console.log(store.getState()));

//2. 액션 디스패치 (publish)
const action = {
  type: 'changeState',
  payload : {
    newState : 'New State'
  }
}
store.dispatch(action);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
