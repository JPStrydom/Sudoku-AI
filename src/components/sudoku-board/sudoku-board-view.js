import React, { Component } from 'react';

export default class SudokuBoardView extends Component {
    constructor(props) {
        super(props);

        this.renderSudokuBoard = this.renderSudokuBoard.bind(this);
        this.renderSolveClearButton = this.renderSolveClearButton.bind(this);
        this.renderResetButton = this.renderResetButton.bind(this);
        this.renderGenerateButton = this.renderGenerateButton.bind(this);
        this.renderGitHubLink = this.renderGitHubLink.bind(this);
        this.getCellValue = this.getCellValue.bind(this);
        this.handleCellInput = this.handleCellInput.bind(this);
        this.getCellStyling = this.getCellStyling.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={'heading'}>Sudoku AI</h1>
                {this.renderSudokuBoard()}
                {this.renderSolveClearButton()}
                {this.renderResetButton()}
                {this.renderGenerateButton()}
                <br />
                {this.renderGitHubLink()}
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
                                        disabled={this.props.sudokuBoard.isSolved}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    renderSolveClearButton() {
        return this.props.sudokuBoard.isSolved ? (
            <button className={'button'} onClick={this.props.resetSolution}>
                <span>Clear</span>
            </button>
        ) : (
            <button className={'button'} onClick={this.props.solveBoard} disabled={!this.props.sudokuBoard.isValid}>
                <span>Solve</span>
            </button>
        );
    }

    renderResetButton() {
        return (
            <button className={'button'} onClick={this.props.resetBoard} disabled={this.props.sudokuBoard.isEmpty}>
                <span>Reset</span>
            </button>
        );
    }

    renderGenerateButton() {
        return (
            <button className={'button'} onClick={this.props.generateBoard} disabled={!this.props.sudokuBoard.isEmpty}>
                <span>Generate</span>
            </button>
        );
    }

    renderGitHubLink() {
        return (
            <a className={'github-link'} href="https://github.com/JPStrydom/Sudoku-AI.git">
                Project GitHub Repository
            </a>
        );
    }

    getCellValue(row, col) {
        const board = this.props.sudokuBoard.board;
        const value = board[row][col];
        return value >= 1 && value <= 9 ? value : '';
    }

    getCellStyling(row, col) {
        const board = this.props.sudokuBoard.board;
        if (this.props.sudokuBoard.solvedCells[row][col] && this.props.sudokuBoard.isSolved) {
            return 'solved-cell';
        }
        if (this.props.sudokuBoard.errorCells[row][col]) {
            return 'invalid-cell';
        }
        if (board[row][col] === 0) {
            return null;
        }
        return 'valid-cell';
    }

    handleCellInput(event, row, col) {
        let value = event.target.value[event.target.value.length - 1];
        this.props.updateCell(row, col, value);
        if (!value) {
            return this.props.clearBoardErrors();
        }
        setTimeout(() => this.props.clearBoardErrors(), 500);
    }
}
