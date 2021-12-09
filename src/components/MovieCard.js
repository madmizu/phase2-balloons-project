import React from 'react';

function MovieCard ({ title, genres, summary, poster, toggleMode, handleReGift }) {
    return (
        <div className="card-content">
            <h2 className="title-header">{title}</h2>
            <div className="poster">
                <img className="poster-img" alt={title} src={poster}/>
            </div>
            <p className="overview">{summary}</p>
            <p className="genre">{genres}</p>
            <button className={"button"+toggleMode}>Keep</button>
            <button onClick={handleReGift} className={"button"+toggleMode}>Re-Gift</button>
        </div>
    )
}

export default MovieCard;