import './Square.css';


const Square = (props) => {

    // const game = useContext(GameContext);

    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                props.squares.splice(props.index, 1, "O");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    }

    return ( 
        <button className="square" onClick={handleClick} disabled={props.gameStatus}>
          {props.squareValue === 'O' ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="DevMountain logo"/> : props.squareValue}
        </button>
     );
}
 
export default Square;