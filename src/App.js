import React from 'react';

class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000)
  }
  
  render(){
    // 원래는 div 안에 this.state.isLoading이라고 써줘야 하지만 ES6기능을 통해 const로 설정해줄수 있음
    const { isLoading } = this.state;
    // javascript의 삼항연산자 - isLoading이 true면 loading, false면 We are ready
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}


export default App;
