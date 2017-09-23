export function validateBoard(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== 0 && !validateCell(row, col, board)) {
                return false;
            }
        }
    }
    return true;
}

export function validateCell(row, col, board) {
    return (
        validateCellValue(row, col, board) &&
        validateCellInRow(row, col, board) &&
        validateCellInColumn(row, col, board) &&
        validateCellInSector(row, col, board)
    );
}

export function isEmpty(errorCells) {
    return !errorCells.filter(row => row.filter(cell => cell).length >= 1).length >= 1;
}

function validateCellValue(row, col, board) {
    return board[row][col] >= 1 && board[row][col] <= 9 && Number.isInteger(board[row][col]);
}

function validateCellInRow(row, col, board) {
    return board[row].filter(element => element === board[row][col]).length <= 1;
}

function validateCellInColumn(row, col, board) {
    return validateCellInRow(col, row, transpose(board));
}

function validateCellInSector(row, col, board) {
    let rowBase = Math.floor(row / 3) * 3;
    let colBase = Math.floor(col / 3) * 3;

    for (let r = rowBase; r < rowBase + 3; r++) {
        for (let c = colBase; c < colBase + 3; c++) {
            if (r !== row && c !== col && board[r][c] === board[row][col]) {
                return false;
            }
        }
    }
    return true;
}

function transpose(matrix) {
    return matrix[0].map(function(col, index) {
        return matrix.map(function(row) {
            return row[index];
        });
    });
}
