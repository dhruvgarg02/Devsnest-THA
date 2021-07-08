import './memeCard.css'
import meme from './meme.jpg'

function MemeCard () {
    return (
        <div className="card-container">
            <div className="meme-card">
                <img src={meme} alt="meme" />
            </div>
        </div>
    )
}

export default MemeCard;