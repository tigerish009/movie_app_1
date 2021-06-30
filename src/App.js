import React from 'react';
import PropTypes from 'prop-types';
import { div } from 'prelude-ls';


// class componenent
// function component처럼 return을 가지지 않고, class이기때문에 render를 반환한다. (render method를 가지고있다)
// class componenent는 React.Component로부터 확장된다
class App extends React.Component {
  // class componenent를 사용하는 이유는 state
  // state는 object이고 componenent의 data를 넣을 공간이 있고, 이 데이터는 변함
  state = {
    count: 0
  }
  add = () => {
    console.log("add");
  }
  minus = () => {
    console.log("minus");
  }
  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/* 리액트에서는 이벤트리스너 없이 onClick만으로 클릭구현 가능 */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}


export default App;
