import SavedGift from './SavedGift.js';

function WatchList ({ myMovies }) {
    const giftColors = [
        "https://i.ibb.co/NxtX8yk/redgift.png",
        "https://i.ibb.co/wKVMxNX/yellowgift.png",
        "https://i.ibb.co/Rg3GPNQ/greengift.png",
        "https://i.ibb.co/BBz3j3v/orangegift.png",
        "https://i.ibb.co/CwRKN20/purplegift.png",
        "https://i.ibb.co/HgpTWDq/bluegift.png",
    ];

    return (
        <div className="watchList">
            {myMovies.map((movie)=>
                <SavedGift
                    key={movie.imdbID}
                    imdbid={movie.imdbID}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.overview}
                    poster={movie.posterURLs.original}
                />)}
            {console.log ('placeholder for watch list')}
        </div>
    )
}

export default WatchList;