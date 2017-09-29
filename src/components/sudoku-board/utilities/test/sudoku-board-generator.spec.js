import seedRandom from 'seedrandom';

import generateSudokuBoard from '../sudoku-board-generator';

const expectedBoard = [
    [8, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 4, 1, 0, 8],
    [3, 0, 0, 8, 0, 0, 0, 2, 0],
    [2, 0, 5, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 6, 0, 2, 0, 5, 0],
    [4, 6, 7, 9, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 8, 9, 7, 3],
    [9, 0, 3, 7, 6, 0, 2, 0, 5],
    [0, 0, 8, 0, 0, 0, 0, 4, 0]
];

seedRandom('test', { global: true });

describe('Sudoku Board Generator', () => {
    it('should generate a valid sudoku board with a unique solution', () => {
        const board = generateSudokuBoard();
        expect(board).toEqual(expectedBoard);
    });
});
