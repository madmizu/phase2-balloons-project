import BalloonGifts from './BalloonGifts.js';
import MovieCard from './MovieCard.js';

function BalloonCollection (props) {
const { moviesList, popBalloon, selectedBalloon } = props


// MoviesList equals an array of 6 movies based on user's filter selection

    return (
        <div className="container">
            {selectedBalloon ? 
            (moviesList.map((movie, index)=>
                <MovieCard
                    key={movie.imdbID}
                    imdbID={movie.imdbID}
                    movie={movie}
                    movieIndex={index}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.overview}
                    poster={movie.posterURLs.original}
                    popBalloon={popBalloon}
                />))
          : (moviesList.map((movie, index)=>
                <BalloonGifts
                    key={movie.imdbID}
                    movieIndex={index}
                    popBalloon={popBalloon}
                    cookie={movie.imdbID}
                />))
            } 
        </div>
    )
}

export default BalloonCollection;
