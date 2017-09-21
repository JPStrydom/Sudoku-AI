import seedRandom from 'seedrandom';

import generateSudokuBoard from '../sudoku-board-generator';

seedRandom('test-seed', { global: true });

describe('Sudoku Board Generator', () => {
    it('should generate a valid sudoku board', () => {
        const board = generateSudokuBoard();
        console.log(board);
    });
});
