import { validateBoard, validateCell, isEmpty } from '../sudoku-board-validator';

describe('Sudoku Board Validator', () => {
    describe('Cell Validation', () => {
        describe('Happy Case', () => {
            it('should pass a valid row where no duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 1, 6, 5, 9, 3, 4, 8, 7],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(3, 2, board)).toEqual(true);
            });

            it('should pass a valid column where no duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 3, 0],
                    [0, 0, 0, 0, 0, 0, 0, 5, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 7, 0],
                    [0, 0, 0, 0, 0, 0, 0, 4, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 2, 0]
                ];
                expect(validateCell(6, 7, board)).toEqual(true);
            });

            it('should pass a valid sector where no duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [6, 4, 1, 0, 0, 0, 0, 0, 0],
                    [5, 8, 3, 0, 0, 0, 0, 0, 0],
                    [7, 2, 9, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(7, 1, board)).toEqual(true);
            });
        });

        describe('Sad Case', () => {
            it('should fail an empty cell', () => {
                const board = [
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
                expect(validateCell(0, 0, board)).toEqual(false);
            });

            it('should fail an invalid row where duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 5, 5, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(3, 2, board)).toEqual(false);
            });

            it('should fail an invalid column where duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(6, 7, board)).toEqual(false);
            });

            it('should fail an invalid sector where duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 8, 0, 0, 0, 0, 0, 0],
                    [0, 8, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(7, 1, board)).toEqual(false);
            });

            it('should fail when an invalid value is present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 10, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateCell(0, 7, board)).toEqual(false);
            });
        });
    });

    describe('Board Validation', () => {
        describe('Happy Case', () => {
            it('should pass an empty board', () => {
                const board = [
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
                expect(validateBoard(board)).toEqual(true);
            });

            it('should pass a board with valid rows where no duplicate values are present', () => {
                const board = [
                    [1, 2, 3, 4, 5, 6, 7, 9, 8],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [2, 1, 6, 5, 9, 3, 4, 8, 7],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [5, 9, 7, 6, 8, 4, 3, 2, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(true);
            });

            it('should pass a board with valid columns where no duplicate values are present', () => {
                const board = [
                    [0, 0, 1, 8, 0, 0, 0, 6, 0],
                    [0, 0, 2, 9, 0, 0, 0, 3, 0],
                    [0, 0, 3, 7, 0, 0, 0, 5, 0],
                    [0, 0, 4, 6, 0, 0, 0, 8, 0],
                    [0, 0, 5, 4, 0, 0, 0, 7, 0],
                    [0, 0, 6, 5, 0, 0, 0, 4, 0],
                    [0, 0, 7, 3, 0, 0, 0, 1, 0],
                    [0, 0, 8, 2, 0, 0, 0, 9, 0],
                    [0, 0, 9, 1, 0, 0, 0, 2, 0]
                ];
                expect(validateBoard(board)).toEqual(true);
            });

            it('should pass a board with valid sectors where no duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 2, 3, 0, 0, 0],
                    [0, 0, 0, 4, 5, 6, 0, 0, 0],
                    [0, 0, 0, 7, 8, 9, 0, 0, 0],
                    [6, 4, 1, 0, 0, 0, 0, 0, 0],
                    [5, 8, 3, 0, 0, 0, 0, 0, 0],
                    [7, 2, 9, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(true);
            });
        });

        describe('Sad Case', () => {
            it('should fail an invalid board with rows where duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 6, 6, 0, 6, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 5, 5, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(false);
            });

            it('should fail an invalid board with columns where duplicate values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 2, 0, 0, 0, 0, 0],
                    [0, 0, 0, 2, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 3, 0, 0, 0, 0, 0, 9, 0],
                    [0, 3, 0, 0, 0, 0, 0, 9, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(false);
            });

            it('should fail a board with invalid sectors where a duplicate value are present', () => {
                const board = [
                    [0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 5],
                    [0, 0, 0, 0, 0, 0, 0, 5, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 8, 0, 0, 0, 0, 0, 0],
                    [0, 8, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(false);
            });

            it('should fail a board when invalid values are present', () => {
                const board = [
                    [0, 0, 0, 0, 0, 0, 0, 10, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, -7, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 'b', 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(validateBoard(board)).toEqual(false);
            });
        });
    });

    describe('Is Empty', () => {
        describe('Happy Case', () => {
            it('should pass an empty board', () => {
                const board = [
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
                expect(isEmpty(board)).toEqual(true);
            });

            it('should pass an empty error cells array', () => {
                const errorCells = [
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false]
                ];
                expect(isEmpty(errorCells)).toEqual(true);
            });
        });

        describe('Sad Case', () => {
            it('should fail a populated board', () => {
                const board = [
                    [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
                expect(isEmpty(board)).toEqual(false);
            });

            it('should fail a populated error cells array', () => {
                const errorCells = [
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false],
                    [true, false, false, false, false, false, false, false, false]
                ];
                expect(isEmpty(errorCells)).toEqual(false);
            });
        });
    });
});
