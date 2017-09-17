import { validateCell, validateBoard } from './sudoku-board-validator';

export default function solve(board) {
    if (validateBoard(board)) {
        if (solveHelper(0, 0, board)) {
            return validateBoard(board);
        }
    }
    return false;
}

function solveHelper(row, col, board) {
    if (col >= 9) {
        col = 0;
        row++;
    }
    if (row >= 9) {
        return true;
    }
    if (board[row][col] === 0 || board[row][col] === 'e') {
        for (let i = 1; i <= 9; i++) {
            board[row][col] = i;
            if (validateCell(row, col, board)) {
                if (solveHelper(row, col + 1, board)) {
                    return true;
                }
            }
        }
        board[row][col] = 0;
        return false;
    }
    return solveHelper(row, col + 1, board);
}
