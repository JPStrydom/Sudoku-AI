import buildActionName from '../../redux/build-action-name';
import validateCell from './utilities/sudoku-board-validator';

const reducerName = 'sudokuBoardReducer';

const UPDATE_BOARD = buildActionName(reducerName, 'UPDATE_BOARD');
const UPDATE_CELL = buildActionName(reducerName, 'UPDATE_CELL');

const initialState = {
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

function updateBoard(payload) {
    return {
        type: UPDATE_BOARD,
        payload
    };
}

export function updateCell(y, x, value, board) {
    board[y][x] = value;
    const isValid = validateCell(y, x, board);
    if (!isValid) {
        board[y][x] = -1;
    }
    return updateBoard({ board, isValid });
}

export default function SudokuBoardReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BOARD:
            return { ...state, board: action.payload.board, isValid: action.payload.isValid };
    }
    return state;
}
