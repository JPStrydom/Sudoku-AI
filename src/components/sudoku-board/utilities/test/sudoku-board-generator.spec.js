import seedRandom from 'seedrandom';

import generateSudokuBoard from '../sudoku-board-generator';

const boardTest = [
    [4, 1, 5, 2, 7, 3, 8, 9, 6],
    [3, 6, 7, 1, 8, 9, 5, 4, 2],
    [8, 9, 2, 4, 6, 5, 3, 1, 7],
    [2, 3, 1, 9, 4, 7, 6, 5, 8],
    [6, 4, 8, 5, 3, 1, 7, 2, 9],
    [7, 5, 9, 8, 2, 6, 1, 3, 4],
    [9, 7, 3, 6, 5, 4, 2, 8, 1],
    [5, 0, 0, 7, 1, 2, 9, 6, 3],
    [1, 2, 6, 3, 9, 8, 4, 7, 5]
];

seedRandom('test', { global: true });

describe('Sudoku Board Generator', () => {
    it('should generate a valid sudoku board with a unique solution', () => {
        const board = generateSudokuBoard();
        console.log(board);
    });
});
