import SudokuBoardReducer, { updateCell, resetBoard, clearBoardErrors } from '../sudoku-board-reducer';

function getInitialState() {
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

function getValidBoard() {
    return [
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
}

function getInvalidBoard() {
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 'e', 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
}

describe('Sudoku Board Reducer', () => {
    it('should return the initial state for undefined actions', () => {
        const action = {};

        const actual = SudokuBoardReducer(undefined, action);

        const expected = {
            ...getInitialState()
        };

        expect(actual).toEqual(expected);
    });

    it('should return the current state for unknown actions', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const actual = SudokuBoardReducer(getInitialState(), action);

        const expected = {
            ...getInitialState()
        };

        expect(actual).toEqual(expected);
    });

    it('should return the updated state for a valid update board action', () => {
        const action = updateCell(4, 4, 1, getValidBoard());

        const actual = SudokuBoardReducer(getInitialState(), action);

        const expected = {
            ...getInitialState(),
            board: getValidBoard(),
            isValid: true
        };

        expect(actual).toEqual(expected);
    });

    it('should return the updated state for an invalid update board action', () => {
        const action = updateCell(4, 4, -1, getValidBoard());

        const actual = SudokuBoardReducer(getInitialState(), action);

        const expected = {
            ...getInitialState(),
            board: getInvalidBoard(),
            isValid: false
        };

        expect(actual).toEqual(expected);
    });

    it('should reset the board for a valid reset board action', () => {
        const action = resetBoard();

        const actual = SudokuBoardReducer({ board: getValidBoard(), isValid: true }, action);

        const expected = {
            ...getInitialState()
        };

        expect(actual).toEqual(expected);
    });

    it('should clear the board of errors for a valid clear board errors action', () => {
        const action = clearBoardErrors(getInvalidBoard());

        const actual = SudokuBoardReducer({ board: getInvalidBoard(), isValid: false }, action);

        const expected = {
            ...getInitialState()
        };

        expect(actual).toEqual(expected);
    });
});
