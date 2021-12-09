import BalloonGifts from './BalloonGifts.js';

function BalloonCollection (props) {
const { moviesList } = props


// This is the click handler for each balloon
function popBalloon(e) {
    // clicking this causes MovieCard to render
    // if (e.target.id === movieIndex)
    // <MovieCard />
    console.log ("pop", e.target.id)
  }



// MoviesList equals an array of 6 movies based on user's filter selection

    return (
        <div className="container">
            {moviesList.map((movie, index)=>
                <BalloonGifts
                    key={movie.imdbID}
                    movie={movie}
                    movieIndex={index}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.overview}
                    poster={movie.posterURLs.original}
                    popBalloon={popBalloon}
                />)}  
        </div>
    )
}

export default BalloonCollection;
