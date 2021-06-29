import React from 'react';


// 재사용 가능한 컴포넌트를 만들어 반복해서 사용할 수 있음
// App안에 있는 Food component의 fav등 prop name을 function Food(props) argument로 받아옴
function Food(props) {
  return (
    <h4>I love Potato~~</h4>
  )
}


function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      {/* Food component에 fav라는 이름의 property를 생성하고, kimchi라는 prop name을 부여함(property name) */}
      <Food 
        fav="kimchi"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, true]}
      />
    </div>
  );
}

export default App;
