import SudokuBoardReducer, {
    getInitialState,
    updateCell,
    clearBoardErrors,
    solveBoard,
    resetBoard,
    resetSolution,
    generateBoard,
    updateBoardAction,
    updateErrorCellsAction,
    updateSolvedCellsAction,
    resetAction,
    UPDATE_BOARD,
    UPDATE_ERROR_CELLS,
    UPDATE_SOLVED_CELLS
} from '../sudoku-board-reducer';
import seedRandom from 'seedrandom';

seedRandom('test', { global: true });

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

function getGeneratedBoard() {
    return [
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
}

const dispatch = jest.fn();

describe('Sudoku Board Reducer', () => {
    beforeEach(() => {
        dispatch.mockReset();
    });

    describe('Simple Actions', () => {
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

        describe('updateBoardAction', () => {
            it('should update the board when firing off updateBoardAction', () => {
                const action = updateBoardAction({ board: 'some board', isEmpty: false });

                const actual = SudokuBoardReducer(undefined, action);

                const expected = {
                    ...getInitialState(),
                    board: 'some board',
                    isEmpty: false
                };

                expect(actual).toEqual(expected);
            });
        });

        describe('updateErrorCellsAction', () => {
            it('should update the error cells when firing off updateErrorCellsAction', () => {
                const action = updateErrorCellsAction({ errorCells: 'some error cells', isValid: false });

                const actual = SudokuBoardReducer(undefined, action);

                const expected = {
                    ...getInitialState(),
                    errorCells: 'some error cells',
                    isValid: false
                };

                expect(actual).toEqual(expected);
            });
        });

        describe('updateSolvedCellsAction', () => {
            it('should update the solved cells when firing off updateSolvedCellsAction', () => {
                const action = updateSolvedCellsAction({ solvedCells: 'some solved cells', isSolved: false });

                const actual = SudokuBoardReducer(undefined, action);

                const expected = {
                    ...getInitialState(),
                    solvedCells: 'some solved cells',
                    isSolved: false
                };

                expect(actual).toEqual(expected);
            });
        });

        describe('resetAction', () => {
            it('should reset the board cells when firing off resetAction', () => {
                const action = resetAction();

                const actual = SudokuBoardReducer(undefined, action);

                const expected = {
                    ...getInitialState()
                };

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('Async Actions', () => {
        describe('Update Cell', () => {
            it('should call the UPDATE_BOARD and UPDATE_ERROR_CELLS actions when updating a valid cell', () => {
                updateCell(4, 4, 1)(dispatch, getState);

                const updateBoardActionExpected = updateBoardAction({ board: getOneCellBoard(), isEmpty: false });
                const updateErrorCellsActionExpected = updateErrorCellsAction({
                    errorCells: getValidErrorCells(),
                    isValid: true
                });

                expect(dispatch).toHaveBeenCalledWith(updateBoardActionExpected);
                expect(dispatch).toHaveBeenCalledWith(updateErrorCellsActionExpected);
            });

            it('should call the UPDATE_BOARD and UPDATE_ERROR_CELLS actions when updating an invalid cell', () => {
                updateCell(4, 4, -1)(dispatch, getState);

                const updateBoardActionExpected = updateBoardAction({ board: getEmptyBoard(), isEmpty: true });
                const updateErrorCellsActionExpected = updateErrorCellsAction({
                    errorCells: getInvalidErrorCells(),
                    isValid: false
                });

                expect(dispatch).toHaveBeenCalledWith(updateBoardActionExpected);
                expect(dispatch).toHaveBeenCalledWith(updateErrorCellsActionExpected);
            });
        });

        describe('Clear Board Errors', () => {
            it('should call the UPDATE_ERROR_CELLS action when clearing board errors', () => {
                clearBoardErrors()(dispatch, getState);

                const updateErrorCellsActionExpected = updateErrorCellsAction({
                    errorCells: getValidErrorCells(),
                    isValid: true
                });

                expect(dispatch).toHaveBeenCalledWith(updateErrorCellsActionExpected);
            });
        });

        describe('Solve Board', () => {
            it('should call the UPDATE_BOARD and UPDATE_SOLVED_CELLS actions when solving a valid board', () => {
                solveBoard()(dispatch, getState);

                const updateBoardActionExpected = updateBoardAction({ board: getSolvedBoard(), isEmpty: false });
                const updateSolvedCellsActionExpected = updateSolvedCellsAction({
                    solvedCells: getSolvedSolvedCells(),
                    isSolved: true
                });

                expect(dispatch).toHaveBeenCalledWith(updateBoardActionExpected);
                expect(dispatch).toHaveBeenCalledWith(updateSolvedCellsActionExpected);
            });
        });

        describe('Reset Board', () => {
            it('should reset the board for a valid reset board action', () => {
                const action = resetBoard();

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

        describe('Reset Solution', () => {
            it('should call the UPDATE_BOARD and UPDATE_SOLVED_CELLS actions when resetting a solution', () => {
                resetSolution()(dispatch, getState);

                const updateBoardActionExpected = updateBoardAction({ board: getEmptyBoard(), isEmpty: true });
                const updateSolvedCellsActionExpected = updateSolvedCellsAction({
                    solvedCells: getUnsolvedSolvedCells(),
                    isSolved: false
                });

                expect(dispatch).toHaveBeenCalledWith(updateBoardActionExpected);
                expect(dispatch).toHaveBeenCalledWith(updateSolvedCellsActionExpected);
            });
        });

        describe('Generate Board', () => {
            it('should call the RESET and UPDATE_BOARD actions when generating a new board', () => {
                generateBoard()(dispatch, getState);

                const resetAction = resetBoard();
                const updateBoardActionExpected = updateBoardAction({ board: getGeneratedBoard(), isEmpty: false });

                expect(dispatch).toHaveBeenCalledWith(resetAction);
                expect(dispatch).toHaveBeenCalledWith(updateBoardActionExpected);
            });
        });
    });
});
