import SudokuBoardReducer, {
    getInitialState,
    updateCell,
    clearBoardErrors,
    solveBoard,
    reset,
    resetSolution,
    UPDATE_BOARD,
    UPDATE_ERROR_CELLS,
    UPDATE_SOLVED_CELLS
} from '../sudoku-board-reducer';

function getState() {
    return {
        sudokuBoard: getInitialState()
    };
}

function getOneCellBoard() {
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

function getEmptyBoard() {
    return [
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
}

function getSolvedBoard() {
    return [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 1, 4, 3, 6, 5, 8, 9, 7],
        [3, 6, 5, 8, 9, 7, 2, 1, 4],
        [8, 9, 7, 2, 1, 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, 4, 2, 9, 7, 8, 5, 3, 1],
        [9, 7, 8, 5, 3, 1, 6, 4, 2]
    ];
}

function getValidErrorCells() {
    return [
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
}

function getInvalidErrorCells() {
    return [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
    ];
}

function getUnsolvedSolvedCells() {
    return [
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
}

function getSolvedSolvedCells() {
    return [
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true, true]
    ];
}

const dispatch = jest.fn();

describe('Sudoku Board Reducer', () => {
    beforeEach(() => {
        dispatch.mockReset();
    });

    describe('Invalid Actions', () => {
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
    });

    describe('Update Cell Action', () => {
        it('should call the UPDATE_BOARD and UPDATE_ERROR_CELLS actions when updating a valid cell', () => {
            updateCell(4, 4, 1)(dispatch, getState);

            const updateBoardAction = { type: UPDATE_BOARD, payload: { board: getOneCellBoard() } };
            const updateErrorCellsAction = {
                type: UPDATE_ERROR_CELLS,
                payload: { errorCells: getValidErrorCells(), isValid: true }
            };

            expect(dispatch).toHaveBeenCalledWith(updateBoardAction);
            expect(dispatch).toHaveBeenCalledWith(updateErrorCellsAction);
        });

        it('should call the UPDATE_BOARD and UPDATE_ERROR_CELLS actions when updating an invalid cell', () => {
            updateCell(4, 4, -1)(dispatch, getState);

            const updateBoardAction = { type: UPDATE_BOARD, payload: { board: getEmptyBoard() } };
            const updateErrorCellsAction = {
                type: UPDATE_ERROR_CELLS,
                payload: { errorCells: getInvalidErrorCells(), isValid: false }
            };

            expect(dispatch).toHaveBeenCalledWith(updateBoardAction);
            expect(dispatch).toHaveBeenCalledWith(updateErrorCellsAction);
        });
    });

    describe('Clear Board Errors Action', () => {
        it('should call the UPDATE_ERROR_CELLS action when clearing board errors', () => {
            clearBoardErrors()(dispatch, getState);

            const updateErrorCellsAction = {
                type: UPDATE_ERROR_CELLS,
                payload: { errorCells: getValidErrorCells(), isValid: true }
            };

            expect(dispatch).toHaveBeenCalledWith(updateErrorCellsAction);
        });
    });

    describe('Solve Board Action', () => {
        it('should call the UPDATE_BOARD and UPDATE_SOLVED_CELLS actions when solving a valid board', () => {
            solveBoard()(dispatch, getState);

            const updateBoardAction = { type: UPDATE_BOARD, payload: { board: getSolvedBoard() } };
            const updateSolvedCellsAction = {
                type: UPDATE_SOLVED_CELLS,
                payload: { solvedCells: getSolvedSolvedCells(), isSolved: true }
            };

            expect(dispatch).toHaveBeenCalledWith(updateBoardAction);
            expect(dispatch).toHaveBeenCalledWith(updateSolvedCellsAction);
        });
    });

    describe('Reset Action', () => {
        it('should reset the board for a valid reset board action', () => {
            const action = reset();

            const actual = SudokuBoardReducer(
                {
                    board: getOneCellBoard(),
                    errorCells: getInvalidErrorCells(),
                    solvedCells: getSolvedSolvedCells(),
                    isValid: true,
                    isSolved: true
                },
                action
            );

            const expected = { ...getInitialState() };

            expect(actual).toEqual(expected);
        });
    });

    describe('Reset Solution Action', () => {
        it('should call the UPDATE_BOARD and UPDATE_SOLVED_CELLS actions when resetting a solution', () => {
            resetSolution()(dispatch, getState);

            const updateBoardAction = { type: UPDATE_BOARD, payload: { board: getEmptyBoard() } };
            const updateSolvedCellsAction = {
                type: UPDATE_SOLVED_CELLS,
                payload: { solvedCells: getUnsolvedSolvedCells(), isSolved: false }
            };

            expect(dispatch).toHaveBeenCalledWith(updateBoardAction);
            expect(dispatch).toHaveBeenCalledWith(updateSolvedCellsAction);
        });
    });
});
