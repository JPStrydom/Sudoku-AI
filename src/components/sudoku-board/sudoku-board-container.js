import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateCell, clearBoardErrors, solveBoard, reset, resetSolution } from './sudoku-board-reducer';
import SudokuBoardView from './sudoku-board-view';

function mapStateToProps({ sudokuBoard }) {
    return { sudokuBoard };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            updateCell,
            clearBoardErrors,
            solveBoard,
            reset,
            resetSolution
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SudokuBoardView);
