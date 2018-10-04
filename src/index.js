module.exports = function solveSudoku(matrix) {
  for (let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {
      if(matrix[x][y] === 0) {
        let values = getValue(x, y, matrix);
        for (let getValue of values) {
          matrix[x][y] = getValue;
        }
      }
    }
  }

  function getValue(x, y, matrix){
    let tempArr = [];
    let row = Math.floor(x / 3) * 3;
    let col = Math.floor(y / 3) * 3;
    for (let i = 0; i < 9; i++){
      tempArr.push([matrix[row][i], matrix[i][col], matrix[row + i % 3][col + i % 3]]);
    }
    return tempArr;
  }

  return matrix;
};