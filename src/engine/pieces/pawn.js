import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let dir = 1;
        let superMove = false;
        if (this.player === Player.BLACK) {
            dir = -1
            if (currentSquare.row === 6){
                superMove = true;
            }
        }
        else {
            if (currentSquare.row === 1){
                superMove = true;
            }
        }
        let availableMove = Square.at(currentSquare.row + dir, currentSquare.col)
        let availableMoves = [availableMove]
        if (board.getPiece(availableMove)!== undefined) {
            return [];
        }
        if (superMove) {
            availableMoves.push(Square.at(currentSquare.row + dir * 2, currentSquare.col))
        }
        let invalidMoves = []
        for (let p = availableMoves.length -1; p >= 0; p--) {
            if ( board.getPiece(availableMoves[p])!== undefined) {
                invalidMoves.push(p)
            }
        }
        for (let p = 0; p < invalidMoves.length; p++){
            delete availableMoves[invalidMoves[p]]
        }
            return availableMoves;
    }
}
