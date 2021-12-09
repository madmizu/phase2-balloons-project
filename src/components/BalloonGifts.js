function BalloonGifts (props) {
const { movieIndex, popBalloon } = props
    const balloonColors = [
        "https://i.ibb.co/5KCVxrH/redballoon.gif",
        "https://i.ibb.co/FzQtrZn/yellowballoon.gif",
        "https://i.ibb.co/BC7m4YC/greenballoon.gif",
        "https://i.ibb.co/3RLTxRL/orangeballoon.gif",
        "https://i.ibb.co/5xCgjFk/purpleballoon.gif",
        "https://i.ibb.co/vD3vc23/blueballoon.gif"
    ];

    // <BalloonGifts
    //  key={movie.imdbID}
    //  title={movie.title}
    //  genres={movie.genres}
    //  summary={movie.overview}
    //  poster={movie.posterURLs.original}
    //  popBalloon={popBalloon}
    // />)} 


    return (
        <>
            <img 
                className='balloon'
                id={movieIndex}
                alt={'Balloon'+movieIndex}
                src={balloonColors.filter(color=> movieIndex === balloonColors.indexOf(color)) }
                onClick={()=>popBalloon(movieIndex)}>
                    {/* when you click, e.target.id is the id of the balloon, which is equal to the index of the movie in the */}
            </img>
        </>
    )
}

export default BalloonGifts;
