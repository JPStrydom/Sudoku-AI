import buildActionName from '../../redux/build-action-name';
import { validateCell, isEmpty } from './utilities/sudoku-board-validator';
import { solve } from './utilities/sudoku-AI';
import generateSudokuBoard from './utilities/sudoku-board-generator';
import _ from 'lodash';

const reducerName = 'sudokuBoardReducer';

const UPDATE_BOARD = buildActionName(reducerName, 'UPDATE_BOARD');
const UPDATE_ERROR_CELLS = buildActionName(reducerName, 'UPDATE_ERROR_CELLS');
const UPDATE_SOLVED_CELLS = buildActionName(reducerName, 'UPDATE_SOLVED_CELLS');
const RESET = buildActionName(reducerName, 'RESET');

export function getInitialState() {
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
        errorCells: [
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false]
        ],
        solvedCells: [
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false, false, false]
        ],
        isEmpty: true,
        isValid: true,
        isSolved: false
    };
}

export function updateCell(y, x, value) {
    return (dispatch, getState) => {
        let { board, errorCells } = getState().sudokuBoard;
        board[y][x] = parseInt(value);
        if (validateCell(y, x, board)) {
            errorCells[y][x] = false;
            dispatch(updateBoardAction({ board, isEmpty: isEmpty(board) }));
            dispatch(updateErrorCellsAction({ errorCells, isValid: isEmpty(errorCells) }));
        } else {
            errorCells[y][x] = true;
            if (!board[y][x] || board[y][x] < 1 || board[y][x] > 9) {
                board[y][x] = 0;
            }
            dispatch(updateBoardAction({ board, isEmpty: isEmpty(board) }));
            dispatch(updateErrorCellsAction({ errorCells, isValid: false }));
        }
    };
}

export function clearBoardErrors() {
    return (dispatch, getState) => {
        let { board, errorCells } = getState().sudokuBoard;
        errorCells = errorCells.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if ((cell && board[rowIndex][colIndex] === 0) || validateCell(rowIndex, colIndex, board)) {
                    return false;
                }
                return cell;
            })
        );
        dispatch(updateErrorCellsAction({ errorCells, isValid: isEmpty(errorCells) }));
    };
}

export function solveBoard() {
    return (dispatch, getState) => {
        let board = _.cloneDeep(getState().sudokuBoard.board);
        const solvedCells = board.map(row => row.map(cell => cell === 0));
        if (solve(board)) {
            dispatch(updateBoardAction({ board, isEmpty: isEmpty(board) }));
            dispatch(updateSolvedCellsAction({ solvedCells, isSolved: true }));
        } else {
            dispatch(
                updateErrorCellsAction({
                    errorCells: solvedCells.map(row => row.map(cell => !cell)),
                    isValid: false
                })
            );
        }
    };
}

export function resetSolution() {
    return (dispatch, getState) => {
        let { board, solvedCells } = getState().sudokuBoard;
        board = board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if (solvedCells[rowIndex][colIndex]) {
                    return 0;
                }
                return cell;
            })
        );
        dispatch(updateBoardAction({ board, isEmpty: isEmpty(board) }));
        dispatch(updateSolvedCellsAction({ solvedCells: getInitialState().solvedCells, isSolved: false }));
    };
}

export function resetBoard() {
    return resetAction();
}

export function generateBoard() {
    return dispatch => {
        const board = generateSudokuBoard();
        dispatch(resetAction());
        dispatch(updateBoardAction({ board, isEmpty: isEmpty(board) }));
    };
}

export function updateBoardAction(payload) {
    return {
        type: UPDATE_BOARD,
        payload
    };
}

export function updateErrorCellsAction(payload) {
    return {
        type: UPDATE_ERROR_CELLS,
        payload
    };
}

export function updateSolvedCellsAction(payload) {
    return {
        type: UPDATE_SOLVED_CELLS,
        payload
    };
}

export function resetAction() {
    return {
        type: RESET
    };
}

export default function SudokuBoardReducer(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_BOARD:
            return {
                ...state,
                board: action.payload.board,
                isEmpty: action.payload.isEmpty
            };
        case UPDATE_ERROR_CELLS:
            return {
                ...state,
                errorCells: action.payload.errorCells,
                isValid: action.payload.isValid
            };
        case UPDATE_SOLVED_CELLS:
            return {
                ...state,
                solvedCells: action.payload.solvedCells,
                isSolved: action.payload.isSolved
            };
        case RESET:
            return getInitialState();
    }
    return state;
}
