import React from 'react';


// 재사용 가능한 컴포넌트를 만들어 반복해서 사용할 수 있음
// App안에 있는 Food component의 fav등 prop name을 function Food(props) argument로 받아옴
// {fav}는 props내부의 object내부의 fav를 불러오는 것으로, props.fav와 같다 JS의 ES6기능임
function Food({ fav }) {
  return (
    <h2>I like {fav}</h2>
  )
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      {/* Food component에 fav라는 이름의 property를 생성하고, kimchi라는 prop name을 부여함(property name) */}
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="apple" />
      <Food fav="cake" />
      <Food fav="coffee" />
    </div>
  );
}

export default App;
