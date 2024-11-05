function solution(board, moves) {
  let pickedDolls = [];
  let res=0
  const checkDolls=(dolls)=>{
    for (let i = 0; i < dolls.length; i++) {
      if(dolls[i]===dolls[i+1]){
        res+=2
        pickedDolls.pop()
        pickedDolls.pop()
      }
    }
  }
  const helper = (dollRow) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][dollRow - 1] !== 0) {
        pickedDolls.push(board[i][dollRow - 1]);
        checkDolls(pickedDolls)
        board[i].splice(dollRow - 1, 1, 0);
        break;
      }
    }
  };
  moves.forEach((i) => {
    helper(i);
  });
  return res
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
