import React from 'react';

const MovieCard = ({results, genres}) => {
    return (
        <div className="content">
            <div className="header">{results.title}</div>
            <div className="poster">
            <img alt={results.title} src={results.posterURLs}/></div>
            <div className="overview">{results.overview}</div>
            <div className="genre">{genres}</div>
            <button className="button">Keep</button>
            <button className="button">Re-Gift</button>
        </div>
    )
}
