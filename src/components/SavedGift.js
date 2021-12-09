import React from 'react';

function SavedGift ({ title, imdbid, genres, summary, poster, toggleMode, handleReGift, handleKeepGift }) {
    return (
        <div className="gift" id={imdbid}>
            <div className="poster">
                <img className={"gift"+imdbid} alt={title} src="https://i.ibb.co/HgpTWDq/bluegift.png"/>
            </div>
            <h2 className="titleheader">{title}</h2>
        </div>
    )
}

export default SavedGift;