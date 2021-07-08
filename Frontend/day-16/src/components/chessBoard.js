import './chessBoard.css'
import BoardRow from './boardrow'

function ChessBoard() {
    return (
        <div className="board-container">
            <div className="chess-board">
                <BoardRow></BoardRow>
                <BoardRow></BoardRow>
                <BoardRow></BoardRow>
                <BoardRow></BoardRow>
            </div>
        </div>
    )
}

export default ChessBoard