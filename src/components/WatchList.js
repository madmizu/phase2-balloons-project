import SavedGift from './SavedGift.js';

// props from App
function WatchList ({ myMovies, toggleMode, openMovieCard }) {

    function handleToggleWatchList () {
        if (toggleMode === "dark") {
            return ("https://i.ibb.co/6t43Jff/watchlistnight.png");
        } else {
            return ("https://i.ibb.co/gJmym88/watchlistday.png");
      }}
      
    return (
        <div className="outer">
            <img className="watchlistImage" src={handleToggleWatchList()} alt="My Watch List" />
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
                        openMovieCard={openMovieCard}
                    />)}
                {console.log ('placeholder for watch list')}
            </div>
        </div>
    )
}

export default WatchList;