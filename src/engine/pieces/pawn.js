import Piece from './piece';
import Square from "../square";
import Player from "../player";
import PieceName from "../pieceName";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.PAWN
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let dir = 1;
        let superMove = false;
        let row = currentSquare.row;
        let col = currentSquare.col;
        let availableMoves = [];
        if (this.player === Player.BLACK) {
            if (row === 0){
                return []
            }
            if (row === 6){
                if(board.getPiece(Square.at(4, col)) === undefined && board.getPiece(Square.at(5, col)) === undefined) {
                    availableMoves.push(Square.at(4, col))
                }
            }
            if(board.getPiece(Square.at(row - 1, col)) === undefined) {
                availableMoves.push(Square.at(row -1, col))
            }
        }
        if (this.player === Player.WHITE) {
            if (row === 7){
                return []
            }
            if (row === 1){
                if(board.getPiece(Square.at(3, col)) === undefined && board.getPiece(Square.at(2, col)) === undefined) {
                    availableMoves.push(Square.at(3, col))
                }
            }
            if(board.getPiece(Square.at(row + 1, col)) === undefined) {
                availableMoves.push(Square.at(row +1, col))
            }
        }
        return availableMoves;
    }
}
