import Piece from './piece';
import Square from "../square";
import PieceName from "../pieceName";

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.KING;
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        let possibleDir = [[1,1], [-1,-1], [1, -1], [-1,1], [0,1], [0, -1], [1, 0], [-1, 0]]
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
