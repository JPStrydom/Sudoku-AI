import React from 'react';
import { Component } from 'react';

import SudokuBoard from './sudoku-board/sudoku-board-container';

export default class App extends Component {
    render() {
        return (
            <div>
                <SudokuBoard />
            </div>
        );
    }
}
