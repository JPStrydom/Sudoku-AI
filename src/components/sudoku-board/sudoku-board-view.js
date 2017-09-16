import React, { Component } from 'react';

export default class SudokuBoardView extends Component {
    constructor(props) {
        super(props);

        this.renderSudokuBoard = this.renderSudokuBoard.bind(this);
        this.getCellValue = this.getCellValue.bind(this);
        this.handleCellInput = this.handleCellInput.bind(this);
        this.getCellStyling = this.getCellStyling.bind(this);
    }

    render() {
        return (
            <div className="container">
                <h1>Sudoku AI</h1>
                {this.renderSudokuBoard()}
                <button>
                    <span>Solve</span>
                </button>
                <button onClick={this.props.resetBoard}>
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
                {board.map((row, rowIndex) => (
                    <tr>
                        {row.map((cell, colIndex) => (
                            <td>
                                <input
                                    id={`cell-${cellCount++}`}
                                    type="text"
                                    value={this.getCellValue(rowIndex, colIndex)}
                                    onChange={event => this.handleCellInput(event, rowIndex, colIndex)}
                                    className={this.getCellStyling(rowIndex, colIndex)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        );
    }

    getCellValue(row, col) {
        const board = this.props.sudokuBoard.board;
        const value = Math.abs(board[row][col]);
        return value >= 1 && value <= 9 ? value : '';
    }

    getCellStyling(row, col) {
        const board = this.props.sudokuBoard.board;
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
        const value = event.target.value[event.target.value.length - 1];

        this.props.updateCell(row, col, value, board);
        setTimeout(() => this.props.clearBoardErrors(board), 500);
    }
}
