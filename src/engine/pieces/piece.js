import Square from "../square";
import square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    inBoundary(row, column){
        let inside = true;
        if (row < 0 || row > 7 || column < 0 || column > 7) {
            inside = false
        }
        return inside
    }

    moveLateral(board){
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        for (let i = 1; i < 8; i++) {
            // Move horizontal right
            let column = i + currentSquare.col;
            if (column > 7 || board.getPiece(Square.at(currentSquare.row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(currentSquare.row, column))
        }
        for (let i = 1; i < 8; i++) {
            // Move horizontal left
            let column = currentSquare.col - i;
            if (column < 0 || board.getPiece(Square.at(currentSquare.row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(currentSquare.row, column))
        }
        for (let i = 1; i < 8; i++) {
            // Move vertically up
            let row = i + currentSquare.row;
            if (row > 7 || board.getPiece(Square.at(row, currentSquare.col)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, currentSquare.col))
        }
        for (let i = 1; i < 8; i++) {
            // Move vertically down
            let row = currentSquare.row - i;
            if (row < 0 || board.getPiece(Square.at(row, currentSquare.col)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, currentSquare.col))
        }
        return availableMoves;
    }

    moveDiagonal(board){
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        for (let i = 1; i < 8; i++) {
            let column = currentSquare.col + i;
            let row = currentSquare.row + i;
            if (!this.inBoundary(row, column) || board.getPiece(Square.at(row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, column))
        }
        for (let i = 1; i < 8; i++) {
            let column = currentSquare.col + i;
            let row = currentSquare.row - i;
            if (!this.inBoundary(row, column) || board.getPiece(Square.at(row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, column))
        }
        for (let i = 1; i < 8; i++) {
            let column = currentSquare.col - i;
            let row = currentSquare.row + i;
            if (!this.inBoundary(row,column) || board.getPiece(Square.at(row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, column))
        }
        for (let i = 1; i < 8; i++) {
            let column = currentSquare.col - i;
            let row = currentSquare.row - i;
            if (!this.inBoundary(row, column) || board.getPiece(Square.at(row, column)) !== undefined) {
                break
            }
            availableMoves.push(Square.at(row, column))
        }
        return availableMoves;
    }

}
