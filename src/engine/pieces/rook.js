import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.ROOK;
    }

    getAvailableMoves(board) {
        let availableMoves = this.moveLateral(board)
        return availableMoves;
    }
}
