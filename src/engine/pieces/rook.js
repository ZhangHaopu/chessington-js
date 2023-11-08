import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        for (let i = 0; i < 8; i++){
            if (i !== currentSquare.col) {
                availableMoves.push(Square.at(currentSquare.row, i))
            }
            if (i !== currentSquare.row) {
                availableMoves.push(Square.at(i, currentSquare.col))
            }
        }
        return availableMoves;
    }
}
