import BalloonGifts from './BalloonGifts.js';

function BalloonCollection (props) {
    
const { popBalloon, moviesList } = props

    return (
        <div className="collection">
            <div className="renderBalloons">
                <BalloonGifts popBalloon={popBalloon}/>
                
            </div>
        </div>
    )
}

export default BalloonCollection;
