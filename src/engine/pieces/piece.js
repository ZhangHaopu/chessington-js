import Square from "../square";
import square from "../square";
import PieceName from "../pieceName";

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

    createMovesArray(board, possibleDir) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        possibleDir.forEach(dir => {
            let row = currentSquare.row + dir[0];
            let col = currentSquare.col + dir[1];
            if (this.inBoundary(row, col)) {
                if (board.getPiece(Square.at(row, col)) === undefined) {
                    availableMoves.push(Square.at(row, col))
                }
                else if (board.getPiece(Square.at(row, col)).player !== this.player
                && board.getPiece(Square.at(row, col)).name !== PieceName.KING){
                    availableMoves.push(Square.at(row, col))
                }
            }
        })
        return availableMoves;
    }
    createMovesArrayNew(board, possibleDir) {
        let currentSquare = board.findPiece(this);
        let availableMoves = possibleDir.map(dir => {
            let row = currentSquare.row + dir[0];
            let col = currentSquare.col + dir[1];
            return Square.at(row, col);
        })
            .filter(({row, col}) => {
                return this.inBoundary(row, col)
            })
            .filter(square => {
                return (board.getPiece(square) === undefined
                    ||
                    (board.getPiece(square).player !== this.player
                        && board.getPiece(square).name !== PieceName.KING)
                )
            })

        return availableMoves;
    }

    createAvailableMoves(board, rowDir, colDir) {
        let currentSquare = board.findPiece(this);
        let availableMoves = []
        for (let i = 1; i < 8; i++) {
            // Move horizontal right
            let row = i * rowDir + currentSquare.row;
            let column = i * colDir + currentSquare.col;
            if (!this.inBoundary(row,column)) {
                break;
            }
            if (board.getPiece(Square.at(row, column)) !== undefined) {
                if (board.getPiece(Square.at(row, column)).player !== this.player){
                    if (board.getPiece(Square.at(row, column)).name !== PieceName.KING) {
                        availableMoves.push(Square.at(row, column));
                    }
                }
                break;
            }
            availableMoves.push(Square.at(row, column))
        }
        return availableMoves
    }

    moveLateral(board){
        let rightMoves = this.createAvailableMoves(board, 1,0);
        let leftMoves = this.createAvailableMoves(board,-1, 0);
        let upMoves = this.createAvailableMoves(board, 0, 1);
        let downMoves = this.createAvailableMoves(board, 0, -1);
        let availableMoves = rightMoves.concat(leftMoves, upMoves, downMoves);
        return availableMoves;
    }

    moveDiagonal(board){
        let upRightMoves = this.createAvailableMoves(board, 1,1);
        let upLeftMoves = this.createAvailableMoves(board,-1, 1);
        let downLeftMoves = this.createAvailableMoves(board, -1, -1);
        let downRightMoves = this.createAvailableMoves(board, 1, -1);
        let availableMoves = upRightMoves.concat(upLeftMoves, downLeftMoves, downRightMoves);
        return availableMoves;
    }

}
