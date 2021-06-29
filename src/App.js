import React from 'react';


const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
]

// 재사용 가능한 컴포넌트를 만들어 반복해서 사용할 수 있음
// App안에 있는 Food component의 fav등 prop name을 function Food(props) argument로 받아옴
// {fav}는 props내부의 object내부의 fav를 불러오는 것으로, props.fav와 같다 JS의 ES6기능임
function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Food component에 fav라는 이름의 property를 생성하고, kimchi라는 prop name을 부여함(property name) */}
      {/* 그냥쓰면 html, 중괄호 쓰면 JS */}
      {/* map은 각 인자마다 function을 실행해주고 결과를 Array로 저장해준다. */}
      {/* dish는 object이며 김치 object, 삼겹살 object등을 가지게 되고, 각 object는 안에 name을 갖고있으므로 object.name이 존재한다. */}
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} /> 
      ))}
    </div>
  );
}

export default App;
