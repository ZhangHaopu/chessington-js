import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        let possibledir = [[1,1], [-1,-1], [1, -1], [-1,1], [0,1], [0, -1], [1, 0], [-1, 0]]
        for (let i = 0; i < 8; i++){
            if (currentSquare.row + possibledir[i][0] < 8 && currentSquare.col + possibledir[i][1] < 8 && currentSquare.row + possibledir[i][0] >= 0 && currentSquare.col + possibledir[i][1] >= 0){
                availableMoves.push(Square.at(currentSquare.row + possibledir[i][0], currentSquare.col + possibledir[i][1]))
            }
        }
        return availableMoves;
    }
}
