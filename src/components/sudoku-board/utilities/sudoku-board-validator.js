function transpose(matrix) {
    return matrix[0].map(function(col, index) {
        return matrix.map(function(row) {
            return row[index];
        });
    });
}

export default function validateCell(row, col, board) {
    if (board[row][col] < 1 || board[row][col] > 9) {
        return false;
    }
    return validateRow(row, col, board) && validateColumn(row, col, board) && validateSector(row, col, board);
}

function validateRow(row, col, board) {
    return board[row].filter(element => element === board[row][col]).length <= 1;
}

function validateColumn(row, col, board) {
    return validateRow(col, row, transpose(board));
}

function validateSector(row, col, board) {
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
