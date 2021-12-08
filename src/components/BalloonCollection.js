import BalloonGifts from './BalloonGifts.js';

function BalloonCollection (props) {
const { popBalloon, netflix, prime, disney, hbo, hulu } = props
    return (
        <div className="collection">
            <div className="renderBalloons">
                <BalloonGifts />
                
            </div>
        </div>
    )
}

export default BalloonCollection;
