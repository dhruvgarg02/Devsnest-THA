import './app.css'
import ChessBoard from './components/chessBoard'
import MemeCard from './components/memeCard'

function App () {
    return  (
        <div className ="container">
            <MemeCard />
            <ChessBoard />
        </div>
    );
}

export default App