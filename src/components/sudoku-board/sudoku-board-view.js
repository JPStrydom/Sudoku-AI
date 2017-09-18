import React, { Component } from 'react';

export default class SudokuBoardView extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            solved: false
        };

        this.renderSudokuBoard = this.renderSudokuBoard.bind(this);
        this.solve = this.solve.bind(this);
        this.reset = this.reset.bind(this);
        this.getCellValue = this.getCellValue.bind(this);
        this.handleCellInput = this.handleCellInput.bind(this);
        this.getCellStyling = this.getCellStyling.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={'heading'}>Sudoku AI</h1>
                {this.renderSudokuBoard()}
                <button
                    className={'button'}
                    onClick={this.solve}
                    disabled={!this.props.sudokuBoard.isValid || this.state.solved}
                >
                    <span>Solve</span>
                </button>
                <button className={'button'} onClick={this.reset}>
                    <span>Reset</span>
                </button>
            </div>
        );
    }

    renderSudokuBoard() {
        const board = this.props.sudokuBoard.board;
        let cellCount = 0;
        return (
            <table id="grid">
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={`row-${cellCount}`}>
                            {row.map((cell, colIndex) => (
                                <td key={`data-${cellCount}`}>
                                    <input
                                        id={`cell-${cellCount++}`}
                                        type="text"
                                        value={this.getCellValue(rowIndex, colIndex)}
                                        onChange={event => this.handleCellInput(event, rowIndex, colIndex)}
                                        className={this.getCellStyling(rowIndex, colIndex)}
                                        disabled={this.state.solved}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    solve() {
        const board = this.props.sudokuBoard.board;
        const solvedCells = board.map(row => row.map(cell => !(cell >= 1 && cell <= 9)));
        this.setState({ solvedCells, solved: true });
        this.props.solveBoard(board);
    }

    reset() {
        this.setState({ solved: false });
        this.props.resetBoard();
    }

    getCellValue(row, col) {
        const board = this.props.sudokuBoard.board;
        const value = Math.abs(board[row][col]);
        return value >= 1 && value <= 9 ? value : '';
    }

    getCellStyling(row, col) {
        const board = this.props.sudokuBoard.board;
        if (this.state.solvedCells[row][col] && this.state.solved) {
            return 'solved-cell';
        }
        if (board[row][col] >= 1 && board[row][col] <= 9) {
            return 'valid-cell';
        }
        if (board[row][col] === 0) {
            return null;
        }
        return 'invalid-cell';
    }

    handleCellInput(event, row, col) {
        const board = this.props.sudokuBoard.board;
        let value = event.target.value[event.target.value.length - 1];
        this.props.updateCell(row, col, value, board);
        if (!value) {
            return this.props.clearBoardErrors(board);
        }
        setTimeout(() => this.props.clearBoardErrors(board), 500);
    }
}
