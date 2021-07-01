import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        // Link의 Router를 통해 state등의 정보를 같이 포함시켜 보낼 수 있다. 링크를 클릭하여 /movie-detail로 가서 console.log 확인하면 state등이 props(인자)로 전달되어있음
            <div className="movie">
                <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {/* map은 자동으로 2번째 인자(index)에 key값을 부여해준다  */}
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 50)}.....</p>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;