import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.QUEEN;
    }

    getAvailableMoves(board) {
        let lateralMove = this.moveLateral(board)
        let diagonalMove = this.moveDiagonal(board)
        let availableMoves = lateralMove.concat(diagonalMove)
        return availableMoves;
    }
}
