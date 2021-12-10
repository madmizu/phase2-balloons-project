import React from 'react';

// props from WatchList
function SavedGift ({ title, imdbid, openMovieCard}) {
    return (
        <div onClick={openMovieCard} className="gift" id={imdbid}>
                <img className="giftbox" alt={title} src={"https://i.ibb.co/1v1D7P5/whitegift.png" }/>
                <p className="giftTitle">{title}</p>
        </div>
    )
}

export default SavedGift;