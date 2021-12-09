import BalloonGifts from './BalloonGifts.js';

function BalloonCollection (props) {
const { moviesList, popBalloon } = props

// MoviesList equals an array of 6 movies based on user's filter selection

    return (
        <div className="container">
            {moviesList.map((movie, index)=>
                <BalloonGifts
                    key={movie.imdbID}
                    movieIndex={index}
                    popBalloon={popBalloon}
                />)}  
        </div>
    )
}

export default BalloonCollection;
