import React from 'react';

function BalloonGifts ({popBalloon}) {

    return (
        <>
        <div className="container" onClick={() => popBalloon(console.log("popped"))}>
            <img className='balloon' id='red' alt='Red Balloon' src="https://i.ibb.co/5KCVxrH/redballoon.gif">
            </img>
            <img className='balloon' id='blue' alt='Blue Balloon' src="https://i.ibb.co/vD3vc23/blueballoon.gif">
            </img>
            <img className='balloon' id='purple' alt='Purple Balloon' src="https://i.ibb.co/5xCgjFk/purpleballoon.gif">
            </img>
            <img className='balloon' id='green' alt='Green Balloon' src="https://i.ibb.co/BC7m4YC/greenballoon.gif">
            </img>
            <img className='balloon' id='yellow' alt='Yellow Balloon' src="https://i.ibb.co/FzQtrZn/yellowballoon.gif">
            </img>
            <img className='balloon' id='orange' alt='Orange Balloon' src="https://i.ibb.co/3RLTxRL/orangeballoon.gif">
            </img>
        </div>
        </>
    )
}

export default BalloonGifts;
