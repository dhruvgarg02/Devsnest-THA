import Tile from "./Tile";

const array = [1,2,3,4,5,6,7,8];

const Board = () => {

    const boardStyle = {
        "display" : "grid",
        "gridTemplateColumns" : "repeat(8, 4vh)",
        "gridTemplateRows" : "repeat(8, 4vh)",
        "border" : "2.6vh solid black"
    }

    return (
        <div style = {boardStyle}>
            {array.map(row => 
                (array.map(column => 
                    <Tile sum = {row + column} key = {row + "," +  column}/>)
                )
            )}
        </div>
    )
}

export default Board