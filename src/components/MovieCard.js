import React from 'react';

function MovieCard ({ title, imdbid, genres, summary, poster, toggleMode, handleReGift, handleKeepGift }) {
    return (
        <div className="card-content" id={imdbid}>
            <h2 className="titleheader">{title}</h2>
            <div className="poster">
                <img className="poster-img" alt={title} src={poster}/>
            </div>
            <p className="overview">{summary}</p>
            <p className="genre">{genres}</p>
            <button onClick={handleKeepGift} className={"button"+toggleMode}>Keep</button>
            <button onClick={handleReGift} className={"button"+toggleMode}>Re-Gift</button>
        </div>
    )
}

export default MovieCard;