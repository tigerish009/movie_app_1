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
    // state에서는 직접 object값을 변경해선 안되며, this.setState를 통하여 데이터를 변경해준다. 이렇게 하면 react가 값이 변경될때마다 필요한부분만 찾아서 refresh & render 해준다
    // this.setState({count: this.state.count + 1});
    // current를 이용하는것이 외부에 영향받지 않는 현재 state를 자동으로 불러와 처리하는 좋은 방법
    this.setState(current => ({ count : current.count + 1}));
  }
  minus = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({ count : current.count -1 }));
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
