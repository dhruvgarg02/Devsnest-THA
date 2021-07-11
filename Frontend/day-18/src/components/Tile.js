const Tile = (props) => {
    if (props.sum % 2) {
        return (
            <div style = { {backgroundColor: "black"} } />
        )
    }
    else {
        return (
            <div style = { {backgroundColor: "white"} } />
        )
    }
}

export default Tile