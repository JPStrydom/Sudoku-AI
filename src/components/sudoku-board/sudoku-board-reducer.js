import buildActionName from '../../redux/build-action-name';
import { validateCell, validateBoard } from './utilities/sudoku-board-validator';
import solve from './utilities/sudoku-AI';

const reducerName = 'sudokuBoardReducer';

const UPDATE_BOARD = buildActionName(reducerName, 'UPDATE_BOARD');

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

function updateBoard(payload) {
    return {
        type: UPDATE_BOARD,
        payload
    };
}

export function updateCell(y, x, value, board) {
    board[y][x] = parseInt(value);
    if (!validateCell(y, x, board)) {
        if (board[y][x] >= 1 && board[y][x] <= 9) {
            board[y][x] *= -1;
        } else {
            board[y][x] = 'e';
        }
        return updateBoard({ board, isValid: false });
    }
    return updateBoard({ board, isValid: validateBoard(board) });
}

export function resetBoard() {
    return updateBoard(getInitialState());
}

export function clearBoardErrors(board) {
    board = board.map(row => row.map(cell => (cell === 'e' ? 0 : cell)));
    return updateBoard({ board, isValid: validateBoard(board) });
}

export function solveBoard(board) {
    const isValid = solve(board);
    return updateBoard({ board, isValid });
}

export default function SudokuBoardReducer(state = getInitialState(), action) {
    switch (action.type) {
        case UPDATE_BOARD:
            return { ...state, board: action.payload.board, isValid: action.payload.isValid };
    }
    return state;
}
