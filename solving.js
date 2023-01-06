function solution(answers) {
  const ex1 = [1, 2, 3, 4, 5];
  const ex2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const ex3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let ans = [0, 0, 0];
  let res = [];
  answers.forEach((i, idx) => {
    if (i === ex1[idx]) {
      ans[0] += 1;
    }
    if (i === ex2[idx]) {
      ans[1] += 1;
    }
    if (i === ex3[idx]) {
      ans[2] += 1;
    }
  });
  for (let i = 0; i < ans.length; i++) {
    if (ans[i]!==0 && Math.max(...ans) === ans[i]) {
      res.push(i + 1);
    }
  }
  return res;
}
