import React, {Component} from 'react';

export default class SudokuBoardView extends Component {
    constructor(props) {
        super(props);
        console.log('PROPS: ', props);
    }

    render() {
        const board = this.props.sudokuBoard.board;
        return (
            <div className="container">
                <h1>Sudoku AI</h1>

                <table id="grid">
                    <tr>
                        <td>
                            <input
                                id="cell-0"
                                type="text"
                                value={board[0][0] || '20'}
                                onChange={() => this.props.updateCell(0, 0, 8, board)}

                            />
                        </td>
                        <td>
                            <input id="cell-1" type="text" value={board[0][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-2" type="text" value={board[0][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-3" type="text" value={board[0][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-4" type="text" value={board[0][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-5" type="text" value={board[0][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-6" type="text" value={board[0][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-7" type="text" value={board[0][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-8" type="text" value={board[0][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-9" type="text" value={board[1][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-10" type="text" value={board[1][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-11" type="text" value={board[1][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-12" type="text" value={board[1][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-13" type="text" value={board[1][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-14" type="text" value={board[1][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-15" type="text" value={board[1][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-16" type="text" value={board[1][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-17" type="text" value={board[1][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-18" type="text" value={board[2][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-19" type="text" value={board[2][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-20" type="text" value={board[2][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-21" type="text" value={board[2][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-22" type="text" value={board[2][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-23" type="text" value={board[2][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-24" type="text" value={board[2][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-25" type="text" value={board[2][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-26" type="text" value={board[2][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-27" type="text" value={board[3][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-28" type="text" value={board[3][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-29" type="text" value={board[3][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-30" type="text" value={board[3][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-31" type="text" value={board[3][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-32" type="text" value={board[3][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-33" type="text" value={board[3][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-34" type="text" value={board[3][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-35" type="text" value={board[3][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-36" type="text" value={board[4][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-37" type="text" value={board[4][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-38" type="text" value={board[4][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-39" type="text" value={board[4][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-40" type="text" value={board[4][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-41" type="text" value={board[4][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-42" type="text" value={board[4][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-43" type="text" value={board[4][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-44" type="text" value={board[4][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-45" type="text" value={board[5][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-46" type="text" value={board[5][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-47" type="text" value={board[5][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-48" type="text" value={board[5][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-49" type="text" value={board[5][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-50" type="text" value={board[5][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-51" type="text" value={board[5][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-52" type="text" value={board[5][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-53" type="text" value={board[5][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-54" type="text" value={board[6][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-55" type="text" value={board[6][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-56" type="text" value={board[6][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-57" type="text" value={board[6][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-58" type="text" value={board[6][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-59" type="text" value={board[6][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-60" type="text" value={board[6][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-61" type="text" value={board[6][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-62" type="text" value={board[6][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-63" type="text" value={board[7][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-64" type="text" value={board[7][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-65" type="text" value={board[7][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-66" type="text" value={board[7][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-67" type="text" value={board[7][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-68" type="text" value={board[7][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-69" type="text" value={board[7][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-70" type="text" value={board[7][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-71" type="text" value={board[7][8] || ''}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input id="cell-72" type="text" value={board[8][0] || ''}/>
                        </td>
                        <td>
                            <input id="cell-73" type="text" value={board[8][1] || ''}/>
                        </td>
                        <td>
                            <input id="cell-74" type="text" value={board[8][2] || ''}/>
                        </td>

                        <td>
                            <input id="cell-75" type="text" value={board[8][3] || ''}/>
                        </td>
                        <td>
                            <input id="cell-76" type="text" value={board[8][4] || ''}/>
                        </td>
                        <td>
                            <input id="cell-77" type="text" value={board[8][5] || ''}/>
                        </td>

                        <td>
                            <input id="cell-78" type="text" value={board[8][6] || ''}/>
                        </td>
                        <td>
                            <input id="cell-79" type="text" value={board[8][7] || ''}/>
                        </td>
                        <td>
                            <input id="cell-80" type="text" value={board[8][8] || ''}/>
                        </td>
                    </tr>
                </table>
                <button>
                    <span>Solve</span>
                </button>
            </div>
        );
    }
}
