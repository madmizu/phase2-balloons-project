import React from 'react';


function SavedGift ({ title, imdbid, toggleMode}) {
    return (
        <div className="gift" id={imdbid}>
                <img className="giftbox" alt={title} src={"https://i.ibb.co/1v1D7P5/whitegift.png" }/>
            <p className="giftTitle">{title}</p>
        </div>
    )
}

export default SavedGift;