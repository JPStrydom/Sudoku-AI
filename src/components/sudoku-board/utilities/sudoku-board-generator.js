import { validateCell } from '../utilities/sudoku-board-validator';
import { hasUniqueSolution } from '../utilities/sudoku-AI';

function getRandomIntBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function findEmptyCell(board) {
    let row, col;
    do {
        row = getRandomIntBetween(0, 8);
        col = getRandomIntBetween(0, 8);
    } while (board[row][col] !== 0);
    return { row, col };
}

export default function generateSudokuBoard() {
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    let cell;
    let row, col;

    const initialPopulatedCellsCount = getRandomIntBetween(16, 32);
    console.log('Initial Populated Cells Count: ', initialPopulatedCellsCount);
    for (let i = 0; i < initialPopulatedCellsCount; i++) {
        do {
            cell = findEmptyCell(board);
            row = cell.row;
            col = cell.col;
            board[row][col] = getRandomIntBetween(1, 9);
        } while (!validateCell(row, col, board));
    }
    return board;
    /*while (!hasUniqueSolution(board)) {
        do {
            cell = findEmptyCell(board);
            row = cell.row;
            col = cell.col;
            board[row][col] = getRandomIntBetween(1, 9);
        } while (!validateCell(row, col, board));
    }
    return board;*/
}
