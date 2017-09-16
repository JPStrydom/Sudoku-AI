import SudokuBoardReducer, { updateCell } from '../sudoku-board-reducer';

const newValidBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const newInvalidBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

describe('Sudoku Board Reducer', () => {
    function stateBefore() {
        return {
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            isValid: true
        };
    }

    it('should return the initial state for undefined actions', () => {
        const action = {};

        const actual = SudokuBoardReducer(undefined, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return the current state for unknown actions', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const actual = SudokuBoardReducer(stateBefore(), action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return the updated state for a valid update board action', () => {
        const action = updateCell(4, 4, 1, newValidBoard);

        const actual = SudokuBoardReducer(stateBefore(), action);

        const expected = {
            ...stateBefore(),
            board: newValidBoard,
            isValid: true
        };

        expect(actual).toEqual(expected);
    });

    it('should return the updated state for an invalid update board action', () => {
        const action = updateCell(4, 4, -1, newValidBoard);

        const actual = SudokuBoardReducer(stateBefore(), action);

        const expected = {
            ...stateBefore(),
            board: newInvalidBoard,
            isValid: false
        };

        expect(actual).toEqual(expected);
    });
});
