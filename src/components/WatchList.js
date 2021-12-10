import SavedGift from './SavedGift.js';

function WatchList ({ myMovies, toggleMode }) {
    const giftColors = [
        "https://i.ibb.co/NxtX8yk/redgift.png",
        "https://i.ibb.co/wKVMxNX/yellowgift.png",
        "https://i.ibb.co/Rg3GPNQ/greengift.png",
        "https://i.ibb.co/BBz3j3v/orangegift.png",
        "https://i.ibb.co/CwRKN20/purplegift.png",
        "https://i.ibb.co/HgpTWDq/bluegift.png",
    ];

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
                />)}
            {console.log ('placeholder for watch list')}
        </div>
    )
}

export default WatchList;