import { validateCell } from '../utilities/sudoku-board-validator';

function getRandomIntBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
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
    let row , col;

    const initialPopulatedCellsCount = getRandomIntBetween(18, 36);
    for (let i = 0; i < initialPopulatedCellsCount; i++) {
        row = getRandomIntBetween(0, 8);
        col = getRandomIntBetween(0, 8);
        board[row][col] = getRandomIntBetween(1, 9);
        while (!validateCell(row, col, board)) {
            row = getRandomIntBetween(0, 8);
            col = getRandomIntBetween(0, 8);
            board[row][col] = getRandomIntBetween(1, 9);
        }
    }
    return board;
}