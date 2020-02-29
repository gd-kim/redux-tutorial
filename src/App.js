import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/action";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.product.length}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jane')}>액션 디스패치</button>
    </div>
  );
}

//subscribe : 스토어의 state를 props로 매핑
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  product : state.product,
  user: state.user
});

// publish: (액션을 디스패치하는) 펑션을 props 로 매핑하기
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  updateUser: (name) => dispatch(updateUser(name))
})


// ()() 두번 연속 들어가는 것은 curring 펑션
// Hoc : High Order Component : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한
// 신규 컴포넌트를 생성
export default connect(mapStateToProps,mapActionToProps)(App);
