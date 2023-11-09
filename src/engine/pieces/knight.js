import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.KNIGHT;
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        let possibleDir = [[1,2], [-1,-2], [1, -2], [-1,2], [2,1], [2, -1], [-2, 1], [-2, -1]]
        possibleDir.forEach(dir => {
            let row = currentSquare.row + dir[0];
            let col = currentSquare.col + dir[1];
            if (this.inBoundary(row, col)) {
                availableMoves.push(Square.at(row, col))
            }
        })
        return availableMoves;
    }
}
