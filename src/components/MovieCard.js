import { useState } from 'react';

function MovieCard ({ title, imdbid, cast, year, runtime, summary, poster, toggleMode, handleReGift, handleKeepGift }) {

    return (
        <div className="card-content" id={imdbid}>
            <h2 className="titleheader">{title}</h2>
            <div className="poster">
                <img className="poster-img" alt={title} src={poster}/>
            </div>
            
            <p className="overview"> Release Year: {year} 🎈 Duration: {runtime} minutes🎈 <a className="links" href={"https://www.imdb.com/title/"+imdbid}>IMDB</a></p>                    
            <p className="overview"> About: {summary}</p>
            <p className="overview"> Cast: 
            {cast.map((member) => " " +member+", ") }
            </p>

            
            <button onClick={handleKeepGift} className={"button"+toggleMode}>Keep</button>
            <button onClick={handleReGift} className={"button"+toggleMode}>Re-Gift</button>
        </div>
    )
}

export default MovieCard;