import { validateCell, validateBoard } from './sudoku-board-validator';

let nodesProcessed = 0;
const nodeProcessLimit = 500000;

export function solve(board) {
    if (validateBoard(board)) {
        try {
            nodesProcessed = 0;
            if (solveHelper(0, 0, board)) {
                return validateBoard(board);
            }
        } catch (error) {
            return false;
        }
    }
    return false;
}

function solveHelper(row, col, board) {
    nodesProcessed++;
    if (nodesProcessed >= nodeProcessLimit) {
        throw new Error(`Solution not found after processing ${nodesProcessed} nodes`);
    }
    if (col >= 9) {
        col = 0;
        row++;
    }
    if (row >= 9) {
        return true;
    }
    if (board[row][col] === 0) {
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

export function hasUniqueSolution(board) {
    if (validateBoard(board)) {
        try {
            if (hasUniqueSolutionHelper(0, 0, board, 0)) {
                return validateBoard(board);
            }
        } catch (error) {
            return false;
        }
    }
    return false;
}

function hasUniqueSolutionHelper(row, col, board, validSolutionCount) {
    if (col >= 9) {
        col = 0;
        row++;
    }
    if (row >= 9) {
        return true;
    }
    if (board[row][col] === 0) {
        for (let i = 1; i <= 9; i++) {
            board[row][col] = i;
            if (validateCell(row, col, board)) {
                if (hasUniqueSolutionHelper(row, col + 1, board, validSolutionCount)) {
                    validSolutionCount++;
                    if (validSolutionCount > 1) {
                        throw new Error('More than one valid solution found');
                    }
                }
            }
        }
        board[row][col] = 0;
        return validSolutionCount === 1;
    }
    return hasUniqueSolutionHelper(row, col + 1, board, validSolutionCount);
}
