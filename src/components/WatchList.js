import SavedGift from './SavedGift.js';

// props from App
function WatchList ({ myMovies, toggleMode, removeGift }) {

    return (
        <div className={"watchList"+toggleMode}>
            {myMovies.map((movie)=>
                <SavedGift
                    key={movie.imdbID}
                    saved={movie.saved}
                    imdbid={movie.imdbID}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.overview}
                    toggleMode={toggleMode}
                    handleClick={removeGift}
                />)}
            {console.log ('placeholder for watch list')}
        </div>
    )
}

export default WatchList;