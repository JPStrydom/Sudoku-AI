import { combineReducers } from 'redux';

import SudokuBoardReducer from '../components/sudoku-board/sudoku-board-reducer';

const rootReducer = combineReducers({
    sudokuBoard: SudokuBoardReducer
});

export default rootReducer;
