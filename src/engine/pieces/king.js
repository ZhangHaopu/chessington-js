import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.KING;
    }

    getAvailableMoves(board) {
        let possibleDir = [[1,1], [-1,-1], [1, -1], [-1,1], [0,1], [0, -1], [1, 0], [-1, 0]]
        let availableMoves = this.createMovesArrayNew(board, possibleDir)
        return availableMoves;
    }
}
