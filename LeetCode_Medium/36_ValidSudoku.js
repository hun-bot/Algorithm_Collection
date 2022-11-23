var isValidSudoku = function (board) {
  // 0~2 3~5 6~8
  let sudoArr = [];
  let getBool = [];
  let loop = 0;
  let line = 2;
  while (getBool.length < 3) {
    for (let i = 0; i < board.length; i++) {
      for (let j = loop; j <= line; j++) {
        sudoArr.push(board[i][j]);
      }
    }
    if (sudoArr.length === 27) {
      loop += 3;
      line += 3;
    }
    getBool.push(checkSudoku(sudoArr));
  }
  if (getBool.includes(false)) return false;
  if (getBool.length === 3 && !getBool.includes(false)) return true;
};
const checkSudoku = (sudoArr) => {
  let tempSudo = [];
  let filtered = [];
  let originalSize = [];
  let setSize = [];
  for (let i = 0; i < sudoArr.length; i++) {
    tempSudo.push(sudoArr.splice(0, 9));
  }
  console.log(tempSudo);
  tempSudo.forEach((arr) => {
    filtered.push(arr.filter((i) => i !== "."));
  });
  filtered.forEach((arr) => {
    originalSize.push(arr.length);
    setSize.push(new Set(arr).size);
  });
  sudoArr = [];
  for (let i = 0; i < originalSize.length; i++) {
    if (originalSize[i] !== setSize[i]) return false;
  }
  return true;
};

isValidSudoku([
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]);
