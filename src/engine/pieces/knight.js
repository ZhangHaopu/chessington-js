import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.KNIGHT;
    }

    getAvailableMoves(board) {
        let possibleDir = [[1,2], [-1,-2], [1, -2], [-1,2], [2,1], [2, -1], [-2, 1], [-2, -1]]
        let availableMoves = this.createMovesArray(board, possibleDir)
        return availableMoves;
    }
}
