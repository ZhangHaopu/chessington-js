import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        for (let i = 1; i < 8; i++){
            if (currentSquare.row + i < 8 && currentSquare.col + i < 8){
                availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col + i))
            }
            if (currentSquare.row + i < 8 && currentSquare.col - i >= 0){
                availableMoves.push(Square.at(currentSquare.row + i, currentSquare.col - i))
            }
            if (currentSquare.row - i >= 0 && currentSquare.col - i >= 0){
                availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col - i))
            }
            if (currentSquare.row - i >= 0 && currentSquare.col + i < 8){
                availableMoves.push(Square.at(currentSquare.row - i, currentSquare.col + i))
            }
        }
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
