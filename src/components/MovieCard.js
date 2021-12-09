import React from 'react';

function MovieCard ({ movie, movieIndex, title, genres, summary, poster}) {
    return (
        <div className="card-content">
            <h2 className="title-header">{title}</h2>
            <div className="poster">
                <img className="poster-img" alt={title} src={poster}/>
            </div>
            <p className="overview">{summary}</p>
            <p className="genre">{genres}</p>
            <button className="button">Keep</button>
            <button className="button">Re-Gift</button>
        </div>
    )
}

export default MovieCard;