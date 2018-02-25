import seedRandom from 'seedrandom';

import generateSudokuBoard from '../sudoku-board-generator';

describe('Sudoku Board Generator', () => {
    it('should generate a valid sudoku board with a unique solution - test 1', () => {
        seedRandom('test1', { global: true });
        const expectedBoard = [
            [4, 1, 2, 0, 0, 0, 8, 9, 3],
            [0, 6, 0, 4, 0, 0, 0, 0, 0],
            [8, 7, 9, 1, 0, 0, 0, 5, 0],
            [0, 0, 4, 0, 5, 0, 2, 0, 0],
            [5, 0, 0, 7, 0, 0, 0, 3, 0],
            [2, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 7, 5, 0, 0, 0],
            [9, 2, 0, 3, 0, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 0]
        ];
        const board = generateSudokuBoard();
        expect(board).toEqual(expectedBoard);
    });

    it('should generate a valid sudoku board with a unique solution - test 2', () => {
        seedRandom('test2', { global: true });
        const expectedBoard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 8, 0, 9, 5, 3, 0, 0],
            [9, 0, 5, 0, 3, 0, 0, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 8],
            [0, 0, 7, 8, 5, 0, 0, 4, 0],
            [8, 0, 9, 0, 0, 4, 0, 5, 3],
            [3, 0, 2, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 4, 0, 0],
            [4, 0, 1, 5, 0, 3, 9, 0, 0]
        ];
        const board = generateSudokuBoard();
        expect(board).toEqual(expectedBoard);
    });
});
