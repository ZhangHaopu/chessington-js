import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let lateralMove = this.moveLateral(board)
        let diagonalMove = this.moveDiagonal(board)
        let availableMoves = lateralMove.concat(diagonalMove)
        return availableMoves;
    }
}
