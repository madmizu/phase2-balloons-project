import BalloonGifts from './BalloonGifts.js';
import MovieCard from './MovieCard.js';

function BalloonCollection (props) {
const { moviesList, popBalloon, selectedBalloon, toggleMode, returnToCollection, keepGift } = props


// MoviesList equals an array of 6 movies based on user's filter selection

    return (
        <div className="container">
            {selectedBalloon ? 
            selectedBalloon.map((movie)=>
                <MovieCard
                    key={movie.imdbID}
                    imdbid={movie.imdbID}
                    title={movie.title}
                    cast={movie.cast}
                    summary={movie.overview}
                    year={movie.year}
                    runtime={movie.runtime}
                    poster={movie.posterURLs.original}
                    popBalloon={popBalloon}
                    toggleMode={toggleMode}
                    handleReGift={returnToCollection}
                    handleKeepGift={keepGift}
                />)
          : moviesList.map((movie, index)=>
                <BalloonGifts
                    key={movie.imdbID}
                    movieIndex={index}
                    popBalloon={popBalloon}
                    imdbid={movie.imdbID}
                 />)} 
        </div>
    )
}

export default BalloonCollection;
