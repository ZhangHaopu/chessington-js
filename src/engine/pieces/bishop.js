import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.BISHOP;
    }

    getAvailableMoves(board) {
        let availableMoves = this.moveDiagonal(board)
        return availableMoves;
    }
}
