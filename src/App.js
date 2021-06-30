import React from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    // axios 등으로 api를 호출할때는 속도가 느릴수 있기때문에 JS에게 시간이 걸린다고 말해줘야한다. 이것을 비동기라고 하며, async, await로 구현한다. JS에게 기다리라가 말하는 것.
    // axios는 javascript의 fetch와 같은것으로 fetch에 layer가 감싸져있어 더욱 유용한 API호출 코드 (npm i axios) 
    // async = 기다려!, await = 무엇을?
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // movies_1은 state 안, movies_2는 axios의 object
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render(){
    // 원래는 div 안에 this.state.isLoading이라고 써줘야 하지만 ES6기능을 통해 const로 설정해줄수 있음
    const { isLoading, movies } = this.state;
    // javascript의 삼항연산자 - isLoading이 true면 loading, false면 We are ready
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
              />
            )
            )}
          </div>
        )
        }
      </section>
    )
  }
}


export default App;
