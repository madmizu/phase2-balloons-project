function BalloonGifts (props) {
const { movieIndex, popBalloon, imdbid } = props
    const balloonColors = [
        "https://i.ibb.co/5KCVxrH/redballoon.gif",
        "https://i.ibb.co/FzQtrZn/yellowballoon.gif",
        "https://i.ibb.co/BC7m4YC/greenballoon.gif",
        "https://i.ibb.co/3RLTxRL/orangeballoon.gif",
        "https://i.ibb.co/5xCgjFk/purpleballoon.gif",
        "https://i.ibb.co/vD3vc23/blueballoon.gif"
    ];

    return (
        <>
            <img 
                className='balloon'
                id={movieIndex}
                imdbid={imdbid}
                alt={'Balloon'+movieIndex}
                src={balloonColors.filter(color=> movieIndex === balloonColors.indexOf(color)) }
                onClick={popBalloon}>
            </img>
        </>
    )
}

export default BalloonGifts;
