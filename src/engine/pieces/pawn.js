import Piece from './piece';
import Square from "../square";
import Player from "../player";
import PieceName from "../pieceName";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.name = PieceName.PAWN
    }

    takeDiagonalPiece(board, color){
        let currentSquare = board.findPiece(this);
        let row = currentSquare.row;
        let col = currentSquare.col;
        let availableMoves = [];
        let possibleDir = [-1, 1];
        possibleDir.forEach(dir => {
                let targetRow = row + color;
                let targetCol = col + color * dir;
                if (this.inBoundary(targetRow, targetCol)
                    && (board.getPiece(Square.at(targetRow, targetCol)) !== undefined)
                    && (board.getPiece(Square.at(targetRow, targetCol)).player !== this.player)
                    && (board.getPiece(Square.at(targetRow, targetCol)).name !== PieceName.KING)
                ) {
                    availableMoves.push(Square.at(targetRow, targetCol))
                }
            }
        )
        return availableMoves;
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
            let diagonalMoves = this.takeDiagonalPiece(board, -1);
            availableMoves = availableMoves.concat(diagonalMoves);
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
            let diagonalMoves = this.takeDiagonalPiece(board, 1);
            availableMoves = availableMoves.concat(diagonalMoves);
        }
        return availableMoves;
    }
}
